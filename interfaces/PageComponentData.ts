import { PageData } from "./PageData";
import PageProps from "./PageProps";

export interface PageComponentData extends PageData {
    component: ({ data }: PageProps) => JSX.Element;
  }

