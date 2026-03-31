import { jahiaComponent, RenderChildren } from "@jahia/javascript-modules-library";
import classes from "./styles.module.css";

interface Props {
  title: string;
  subtitle: string;
}

jahiaComponent(
  {
    componentType: "view",
    nodeType: "training:teamSection",
  },
  ({ title, subtitle }: Props) => (
    <section className={classes.section}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={classes.grid}>
        <RenderChildren />
      </div>
    </section>
  ),
);
