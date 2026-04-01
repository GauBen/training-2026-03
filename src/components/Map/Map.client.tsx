import { useEffect, useState } from "react";
import type { Props } from "./types.js";
import "leaflet/dist/leaflet.css";

export default function Map({ latitude, longitude }: Props) {
  const [L, setLeaflet] = useState<typeof import("leaflet")>();
  useEffect(() => {
    import("leaflet").then(setLeaflet);
  }, []);
  return (
    <div
      style={{ height: "400px" }}
      ref={(div) => {
        if (!div || !L) return;
        const map = L.map(div).setView([latitude, longitude], 13);
        L.tileLayer(
          "https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/{z}/{x}/{y}.jpg",
          { maxZoom: 19 },
        ).addTo(map);
      }}
    >
      The map is loading...
    </div>
  );
}
