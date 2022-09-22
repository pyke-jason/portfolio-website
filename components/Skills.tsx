import Section from "./Section";

interface SkillData {
    title: string;
    skills?: string[];
}

function SkillEntry({ title, skills: children }: SkillData) {

    return <>
        <div>
            <h2>{title}</h2>
            <ul>
                {children && children.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
        </div>

    </>
}
export default function Skills() {
    return <>
        <Section title="Skills">
            <SkillEntry title={"Proficient Programming Languages"} skills={
                ["C#", "C", "TypeScript", "JavaScript", "Java", "SQL"]
            } />
            <SkillEntry title={"Familiar Programming Languages"} skills={
                ["C++", "HTML/CSS", "GO", "Dart", "R"]
            } />
        </Section>
    </>
}