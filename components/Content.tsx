import PageData from "interfaces/PageData";

interface ContentData {
    pages: { title: string, url: string, component: ({ id }: PageData) => JSX.Element }[];
    className?: string;
}

export default function Content({ className, pages }: ContentData) {
    return <div className={className}>
        {pages.map((x) => <x.component id={x.url} />)}
    </div>
}