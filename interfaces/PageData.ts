import PageProps from "./PageProps";

export interface PageData {
    title: string;
    id: string;
    component: ({ data, onBecameActive }: PageProps) => JSX.Element;
  }
