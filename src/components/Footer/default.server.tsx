import { buildNodeUrl, jahiaComponent } from "@jahia/javascript-modules-library";
import { Fragment } from "react";
import classes from "./styles.module.css";
import type { JCRNodeWrapper } from "org.jahia.services.content";

interface Props {
  notice: string;
  links: Array<JCRNodeWrapper | null>;
}

jahiaComponent(
  {
    componentType: "view",
    nodeType: "training:footer",
  },
  ({ notice, links }: Props) => (
    <footer className={classes.footer}>
      <p>
        {links
          ?.filter((link) => link !== null)
          .map((link, i) => (
            <Fragment key={link.getIdentifier()}>
              {i > 0 && " - "}
              <a href={buildNodeUrl(link)}>{link.getDisplayableName()}</a>
            </Fragment>
          ))}
      </p>
      <p>
        &copy; {new Date().getFullYear()} {notice}
      </p>
    </footer>
  ),
);
