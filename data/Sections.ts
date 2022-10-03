import TitlePage from "@components/TitlePage";
import Achievements from "@components/Achievements";
import Background from "@components/Background";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import { PageData } from "interfaces/PageData";
import { PageComponentData } from "interfaces/PageComponentData";

export const SectionComponents: PageComponentData[] = [
	{ title: "About", id: "about", component: TitlePage },
	{ title: "Background", id: "background", component: Background },
	{ title: "Projects", id: "projects", component: Projects },
	{ title: "Skills", id: "skills", component: Skills },
	{ title: "Achievements", id: "awards", component: Achievements },
];

export const Sections: PageData[] = SectionComponents.map((raw) => {
	return { title: raw.title, id: raw.id };
});
