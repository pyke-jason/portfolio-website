import Section from "@components/Section";
import SectionEntry from "@components/SectionEntry";
import SectionEntryNotes from "@components/SectionEntryNotes";
import SkillEntry from "@components/SkillsEntry";
import Title from "@components/Title";
import Awards from "./Awards";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

interface ContentData {
    className?: string;
}

export default function Content({ className }: ContentData) {
    return <div className={className}>
        <Title />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
    </div>
}