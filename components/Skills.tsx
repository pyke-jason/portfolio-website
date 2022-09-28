import PageProps from "interfaces/PageProps";
import TitledSection from "./TitledSection";

interface SkillData {
	title: string;
	skills?: string[];
}

function SkillEntry({ title, skills: children }: SkillData) {
	return (
		<>
			<div className="space-y-5 mb-5">
				<h2 className="text-lg font-medium">{title}</h2>
				<div className="flex flex-wrap space-x-4">{children && children.map((v, i) => <p key={i}>{v}</p>)}</div>
			</div>
		</>
	);
}
export default function Skills({ data, onBecameActive }: PageProps) {
	return (
		<>
			<TitledSection onBecameActive={onBecameActive} data={data} title="Skills">
				<div>
					<SkillEntry
						title={"Programming Languages (proficient)"}
						skills={["C#", "Python", "C", "TypeScript", "JavaScript", "Java", "SQL"]}
					/>
					<SkillEntry title={"Programming Languages (familiar)"} skills={["C++", "HTML/CSS", "GO", "Dart", "R"]} />
					<SkillEntry
						title={"Frameworks & Libraries"}
						skills={[
							".NET Core",
							".NET Framework",
							"Next.js",
							"React.js",
							"Apache Spark, Apache Hadoop",
							"OpenCV (python)",
							"numpy",
							"pandas",
							"scikit-learn",
						]}
					/>
					<SkillEntry title={"Databases"} skills={["Microsoft SQL Server", "SQLite", "MongoDB"]} />
					<SkillEntry
						title={"Tools & Platforms"}
						skills={[
							"Docker",
							"Git",
							"CMake",
							"Git LFS",
							"Visual Studio",
							"Visual Studio Code",
							"PyCharm",
							"Amazon EMR",
							"Package Managers (npm, yarn)",
							"MongoDB Compass",
							"Chrome Developer Tools",
							"Azure DevOps",
							"Confluence",
							"Postman",
							"Blender",
						]}
					/>
					<SkillEntry
						title={"Concepts"}
						skills={[
							"Objected Oriented Programming & Design Patterns (Creational, Structural, Behavioral)",
							"RESTful API Design",
							"Separation of Concerns & Cohesion",
							"Agile Development Methodology",
							"MVC architecture",
						]}
					/>
					<SkillEntry
						title={"Soft Skills"}
						skills={["Written & Verbal Communication", "Teamwork", "Collaboration", "Problem Solving", "Persistence"]}
					/>
				</div>
			</TitledSection>
		</>
	);
}
