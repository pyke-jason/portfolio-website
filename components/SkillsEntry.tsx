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

export default SkillEntry;