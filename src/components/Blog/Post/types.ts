import type { JCRNodeWrapper } from "org.jahia.services.content";

export interface Props {
  "jcr:title": string; // From mix:title
  "subtitle": string;
  "cover": JCRNodeWrapper;
  "body": string;
  "authors"?: Array<JCRNodeWrapper | null>;
  "blogDate"?: string;
}
