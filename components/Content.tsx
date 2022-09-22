import { PageDictionary } from "interfaces/PageDictionary";

interface ContentData extends PageDictionary {

    className?: string;
}

export default function Content({ className, pages }: ContentData) {
    return <div className={className}>
        {pages.map((x) => <x.component id={x.url} />)}
    </div>
}