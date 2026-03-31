import { AbsoluteArea, Area, jahiaComponent } from "@jahia/javascript-modules-library";
import { Layout } from "../Layout.js";

jahiaComponent(
  {
    componentType: "template",
    nodeType: "jnt:page",
    name: "singleColumn",
  },
  ({ "jcr:title": title }, { renderContext }) => (
    <Layout title={title}>
      <Area name="header" allowedNodeTypes={["training:heroSection"]} numberOfItems={1} />
      <main style={{ maxWidth: "40rem", margin: "0 auto" }}>
        <Area name="main" />
      </main>
      <AbsoluteArea name="footer" parent={renderContext.getSite()} nodeType="training:footer" />
    </Layout>
  ),
);
