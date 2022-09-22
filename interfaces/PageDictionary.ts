import PageData from "./PageData";

export interface PageDictionary {
    pages: { title: string, url: string, component: ({ id }: PageData) => JSX.Element }[];
}