import { buildNodeUrl, jahiaComponent } from "@jahia/javascript-modules-library";
import type { JCRNodeWrapper } from "org.jahia.services.content";
import classes from "./styles.module.css";

type Props =
  | { label: string; type: "none" }
  | { "label": string; "type": "internal"; "j:linknode": JCRNodeWrapper }
  | { "label": string; "type": "external"; "j:url": string; "j:linkTitle": string };

jahiaComponent(
  {
    componentType: "view",
    nodeType: "training:heroCallToAction",
  },
  (props: Props) => {
    switch (props.type) {
      case "none":
        return <s>{props.label}</s>;

      case "internal":
        return (
          <a className={classes.cta} href={buildNodeUrl(props["j:linknode"])}>
            {props.label}
          </a>
        );

      case "external":
        return (
          <a className={classes.cta} href={props["j:url"]} title={props["j:linkTitle"]}>
            {props.label}
          </a>
        );
    }
  },
);
