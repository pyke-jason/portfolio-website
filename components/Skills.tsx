import PageData from "interfaces/PageData";
import TitledSection from "./TitledSection";

interface SkillData {
    title: string;
    skills?: string[];
}

function SkillEntry({ title, skills: children }: SkillData) {

    return <>
        <div className="space-y-5 mb-5">
            <h2 className="text-lg font-medium">{title}</h2>
            <div className="flex flex-wrap space-x-4">
                {children && children.map((v, i) => <p key={i}>{v}</p>)}
            </div>
        </div>

    </>
}
export default function Skills({ id, onBecameActive }: PageData) {
    return <>
        <TitledSection onBecameActive={onBecameActive} id={id} title="Skills">
            <div>
                <SkillEntry title={"Programming Languages (proficient)"} skills={
                    ["C#", "Python", "C", "TypeScript", "JavaScript", "Java", "SQL"]
                } />
                <SkillEntry title={"Programming Languages (familiar)"} skills={
                    ["C++", "HTML/CSS", "GO", "Dart", "R"]
                } />
                <SkillEntry title={"Frameworks & Libraries"} skills={
                    [".NET Core", ".NET Framework", "Next.js", "React.js", "OpenCV (python)", "numpy"]
                } />
                <SkillEntry title={"Databases"} skills={
                    ["Microsoft SQL Server", "SQLite", "MongoDB"]
                } />
                <SkillEntry title={"Tools"} skills={
                    ["Docker",
                        "Git",
                        "Git LFS",
                        "Visual Studio",
                        "Visual Studio Code",
                        "Pycharm",
                        "Package Managers (npm, yarn)",
                        "MongoDB Compass",
                        "Chrome Developer Tools",
                        "Azure DevOps",
                        "Confluence",
                        "Postman",
                        "Blender"]
                } />
            </div>
        </TitledSection>
    </>
}