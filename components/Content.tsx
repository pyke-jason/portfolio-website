import { PageDictionary } from "interfaces/PageDictionary";
import Footer from "./Footer";
import Section from "./Section";

interface ContentData extends PageDictionary {

    className?: string;
}

export default function Content({ className, pages }: ContentData) {
    return <div className={className}>
        {pages.map((x) => <x.component id={x.url} />)}
        <Footer />
    </div>
}