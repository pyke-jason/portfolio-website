import PageData from "interfaces/PageData";
import Section from "./Section";

interface SkillData {
    title: string;
    skills?: string[];
}

function SkillEntry({ title, skills: children }: SkillData) {

    return <>
        <div className="flex flex-wrap space-x-4">
            <h2 className="text-lg font-medium">{title}</h2>
            {children && children.map((v, i) => <p key={i}>{v}</p>)}
        </div>

    </>
}
export default function Skills({ id }: PageData) {
    return <>
        <Section id={id} title="Skills">
            <SkillEntry title={"Proficient Programming Languages:"} skills={
                ["C#", "C", "Python", "TypeScript", "JavaScript", "Java", "SQL"]
            } />
            <SkillEntry title={"Familiar Programming Languages:"} skills={
                ["C++", "HTML/CSS", "GO", "Dart", "R"]
            } />
        </Section>
    </>
}