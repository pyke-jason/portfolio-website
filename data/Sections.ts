import TitlePage from "@components/TitlePage";
import AchievementsSection from "@components/AchievementsSection";
import Background from "@components/BackgroundSection";
import ProjectsSection from "@components/ProjectsSection";
import Skills from "@components/SkillsSection";
import { PageData } from "interfaces/PageData";
import { PageComponentData } from "interfaces/PageComponentData";

export const SectionComponents: PageComponentData[] = [
	{ title: "About", id: "about", component: TitlePage },
	{ title: "Background", id: "background", component: Background },
	{ title: "Projects", id: "projects", component: ProjectsSection },
	{ title: "Skills", id: "skills", component: Skills },
	{ title: "Achievements", id: "awards", component: AchievementsSection },
];

export const Sections: PageData[] = SectionComponents.map((raw) => {
	return { title: raw.title, id: raw.id };
});
