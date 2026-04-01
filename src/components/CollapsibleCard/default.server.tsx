import { jahiaComponent, Island, RenderChildren } from "@jahia/javascript-modules-library";
import type { Props } from "./types.js";
import Card from "./Card.client.jsx";

jahiaComponent(
  {
    componentType: "view",
    nodeType: "training:collapsibleCard",
  },
  ({ "jcr:title": title }: Props) => (
    <Island component={Card} props={{ title }}>
      <RenderChildren />
    </Island>
  ),
);
