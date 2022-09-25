import React from "react";
import PageProps from "./PageProps";

export interface PageDictionary {
    pages: { title: string, id: string, component: ({ data }: PageProps) => JSX.Element }[];
}