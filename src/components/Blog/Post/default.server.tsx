import { buildNodeUrl, jahiaComponent } from "@jahia/javascript-modules-library";
import type { Props } from "./types.js";

jahiaComponent(
  {
    componentType: "view",
    nodeType: "training:blogPost",
  },
  ({ "jcr:title": title, subtitle, cover, blogDate }: Props, { currentNode }) => (
    <article>
      <img src={buildNodeUrl(cover)} alt="" />
      <h3>
        <a href={buildNodeUrl(currentNode)}>{title}</a>
      </h3>
      <p>{subtitle}</p>
      <p>
        {blogDate
          ? new Date(blogDate).toLocaleDateString(currentNode.getLanguage(), { dateStyle: "long" })
          : "Draft"}
      </p>
    </article>
  ),
);
