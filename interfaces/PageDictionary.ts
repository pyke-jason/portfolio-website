import React from "react";
import PageData from "./PageData";

export interface PageDictionary {
    pages: { title: string, id: string, component: ({ id }: PageData) => JSX.Element }[];
}