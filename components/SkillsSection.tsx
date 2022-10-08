import PageProps from "interfaces/PageProps";
import TitledSection from "./TitledSection";

interface SkillData {
	title: string;
	skills?: string[];
}

function SkillEntry({ title, skills: children }: SkillData) {
	return (
		<>
			<div className="space-y-5 mb-8">
				<h2 className="text-lg font-medium">{title}</h2>
				<div className="flex flex-wrap space-x-5">{children && children.map((v, i) => <p className="text-base text-zinc-500" key={i}>{v}</p>)}</div>
			</div>
		</>
	);
}
export default function Skills({ data }: PageProps) {
	return (
		<>
			<TitledSection data={data}>
				<div>
					<SkillEntry
						title={"Programming Languages (proficient)"}
						skills={["C#", "Java", "Python", "TypeScript", "JavaScript", "SQL"]}
					/>
					<SkillEntry title={"Programming Languages (familiar)"} skills={["C", "C++", "HTML/CSS", "GO", "Dart", "R"]} />
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
							"Android Studio",
							"Amazon EMR",
							"Package Managers (npm, yarn)",
							"MongoDB Compass",
							"Chrome Developer Tools",
							"Azure DevOps",
							"Confluence",
							"Postman",
							"Tableau",
							"Blender",
						]}
					/>
					<SkillEntry
						title={"Concepts"}
						skills={[
							"Objected Oriented Programming & Design Patterns (Creational, Structural, Behavioral)",
							"RESTful API Design",
							"MVC architecture",
							"Separation of Concerns & Cohesion",
							"Parallelism, Fault Tolerance, Data Distribution, Load Balancing",
							"Agile Development Methodology",
							"Systems Development Lifecycle (Waterfall)",
							"Rapid Application Development",
							"Lean Methodology",
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
