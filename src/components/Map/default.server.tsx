import { Island, jahiaComponent } from "@jahia/javascript-modules-library";
import type { Props } from "./types.js";
import Map from "./Map.client.jsx";

jahiaComponent(
  {
    componentType: "view",
    nodeType: "training:map",
  },
  ({ latitude, longitude }: Props) => (
    <section>
      <h2>Title</h2>
      <p>
        Coordinates: latitude {latitude}, longitude {longitude}
      </p>
      <Island component={Map} props={{ latitude, longitude }} />
      <footer>This is the end of this section</footer>
    </section>
  ),
);
