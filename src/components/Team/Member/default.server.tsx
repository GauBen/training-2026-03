import { buildNodeUrl, jahiaComponent } from "@jahia/javascript-modules-library";
import type { JCRNodeWrapper } from "org.jahia.services.content";
import classes from "./styles.module.css";

interface Props {
  name: string;
  title: string;
  photo: JCRNodeWrapper;
}

jahiaComponent(
  { componentType: "view", nodeType: "training:teamMember" },
  ({ name, title, photo }: Props) => (
    <p className={classes.person}>
      <img src={buildNodeUrl(photo)} width="60" height="60" alt="" />
      <span>
        <strong>{name}</strong>
        {title}
      </span>
    </p>
  ),
);
