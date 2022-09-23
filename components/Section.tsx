import PageData from "interfaces/PageData";
import { useEffect, useRef } from "react";

interface SectionData extends PageData {
    title: string;
    children?: React.ReactNode;
}

function Section({ title, children, id, onBecameActive }: SectionData) {
    const ref = useRef();
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    function handleScroll() {
        const { offsetTop, offsetHeight } = ref.current;
        const offsetBottom = offsetTop + offsetHeight;
        const scrollMid = window.scrollY + window.innerHeight / 2;
        if (scrollMid >= offsetTop && scrollMid <= offsetBottom) {
            onBecameActive(id);
        }
    }

    return <>
        <section id={id} ref={ref} className="p-8 md:p-12 border-b">
            <div className="max-w-3xl space-y-12">
                {<h1 className="text-xl md:text-3xl text-slate-700 font-medium uppercase">{title}</h1>}
                {children}
            </div>
        </section>
    </>
}

export default Section;