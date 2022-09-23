import { PageDictionary } from "interfaces/PageDictionary";
import { useState } from "react";
import Footer from "./Footer";

interface ContentData extends PageDictionary {
    onBecameActive: any;
    className?: string;
}

export default function Content({ className, pages, onBecameActive }: ContentData) {
    return <div className={className}>
        {pages.map((x) => <x.component key={x.id} id={x.id} onBecameActive={onBecameActive} />)}
        <Footer />
    </div>
}