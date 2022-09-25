import Content from "@components/Content";
import Nav from "@components/Nav";
import TitlePage from "@components/TitlePage";
import Achievements from "@components/Achievements";
import Education from "@components/Education";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import { useState } from "react";
import Footer from "@components/Footer";
import { PageData } from "interfaces/PageData";
import Head from "next/head";

export type SectionAssignment = (page: PageData) => void;

const sections: PageData[] = [
	{ title: "About", id: "about", component: TitlePage },
	{ title: "Education", id: "education", component: Education },
	{ title: "Experience", id: "experience", component: Experience },
	{ title: "Projects", id: "projects", component: Projects },
	{ title: "Skills", id: "skills", component: Skills },
	{ title: "Achievements", id: "awards", component: Achievements },
];

export default function Home() {
	const [activeSection, setActiveSection] = useState(sections[0]);

	function onBecameActive(section: PageData) {
		setActiveSection(section);
	}

	function selectActive(section: PageData) {
		if (section.id === activeSection.id) return;
		setActiveSection(section);
		scrollTo();
		window.scrollTo({
			top: document.getElementById(section.id).offsetTop - 300,
		});
	}

	return (
		<>
			<Head>
				<title>Jason Pyke</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="md:flex">
				<Nav pages={sections} activeSection={activeSection} selectActive={selectActive} />
				<Content pages={sections} className="md:flex-grow" onBecameActive={onBecameActive} />
			</div>
			<Footer />
		</>
	);
}
