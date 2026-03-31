import { buildNodeUrl, jahiaComponent } from "@jahia/javascript-modules-library";
import classes from "./styles.module.css";
import type { Props } from "./types.js";
import clsx from "clsx";

// Declare how to render the component
export const SmallHeroSection = jahiaComponent(
  {
    componentType: "view",
    nodeType: "training:heroSection",
    name: "small",
  },
  ({ title, subtitle, background }: Props) => (
    <header
      className={clsx(classes.hero, classes.small)}
      style={{ backgroundImage: `url(${buildNodeUrl(background)})` }}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  ),
);
