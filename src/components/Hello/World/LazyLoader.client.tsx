import { useState } from "react";

export default function LazyLoader() {
  const [cards, setCards] = useState<string[]>([]);
  const [pageInfo, setPageInfo] = useState<{ hasNextPage: boolean; endCursor: string | null }>({
    hasNextPage: true,
    endCursor: null,
  });

  return (
    <>
      {cards.map((title) => (
        <p key={title}>{title}</p>
      ))}
      {pageInfo.hasNextPage && (
        <button
          onClick={async () => {
            const response = await fetch("/modules/graphql", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                query: /* GraphQL */ `
                  query ($cursor: String) {
                    jcr {
                      nodesByCriteria(
                        criteria: { nodeType: "training:helloCard", paths: "/sites/training" }
                        first: 3
                        after: $cursor
                      ) {
                        nodes {
                          path
                          title: property(language: "en", name: "jcr:title") {
                            value
                          }
                        }
                        pageInfo {
                          hasNextPage
                          endCursor
                        }
                      }
                    }
                  }
                `,
                variables: { cursor: pageInfo.endCursor },
              }),
            });
            const { data } = (await response.json()) as {
              data: {
                jcr: {
                  nodesByCriteria: {
                    nodes: { path: string; title: { value: string } }[];
                    pageInfo: { hasNextPage: boolean; endCursor: string | null };
                  };
                };
              };
            };
            const newCards = data.jcr.nodesByCriteria.nodes.map((node) => node.title.value);
            setCards([...cards, ...newCards]);
            setPageInfo(data.jcr.nodesByCriteria.pageInfo);
          }}
        >
          Load more
        </button>
      )}
    </>
  );
}
