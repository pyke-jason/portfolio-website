interface SectionData {
    title: string;
    children?: React.ReactNode;
}

function Section({ title, children }: SectionData) {
    return <>
        <div className="p-9 border-b">
            {<h1 className="text-3xl font-bold uppercase">{title}</h1>}
            {children}
        </div>
    </>
}

export default Section;