import PageData from "interfaces/PageData";

interface SectionData extends PageData {
    title: string;
    children?: React.ReactNode;
}

function Section({ title, children, id }: SectionData) {
    return <>
        <section id={id}className="p-8 md:p-12 border-b">
            <div className="max-w-7xl">
                {<h1 className="text-3xl font-bold uppercase">{title}</h1>}
                {children}
            </div>
        </section>
    </>
}

export default Section;