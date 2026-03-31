import { AbsoluteArea, jahiaComponent, Render } from "@jahia/javascript-modules-library";
import type { Props } from "./types.js";
import { SmallHeroSection } from "../../Hero/Section/small.server.jsx";

jahiaComponent(
  {
    componentType: "view",
    nodeType: "training:blogPost",
    name: "fullPage",
  },
  (
    { "jcr:title": title, subtitle, cover, body, authors }: Props,
    { currentResource, renderContext },
  ) => (
    <>
      <SmallHeroSection title={title} subtitle={subtitle} background={cover} />
      <article dangerouslySetInnerHTML={{ __html: body }} />
      {authors
        ?.filter((author) => author !== null)
        .map((author) => (
          <Render key={author.getIdentifier()} node={author} />
        ))}
      <AbsoluteArea name="footer" parent={renderContext.getSite()} nodeType="training:footer" />
    </>
  ),
);
