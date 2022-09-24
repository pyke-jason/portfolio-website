import Content from "@components/Content";
import Nav from "@components/Nav";
import Title from "@components/Title";
import Achievements from "@components/Achievements";
import Education from "@components/Education";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "@components/Footer";

const pages = [
	{ title: "Jason Pyke", id: "about", component: Title },
	{ title: "Education", id: "education", component: Education },
	{ title: "Experience", id: "experience", component: Experience },
	{ title: "Projects", id: "projects", component: Projects },
	{ title: "Skills", id: "skills", component: Skills },
	{ title: "Achievements", id: "awards", component: Achievements },
];
function getPage(id: string) {
	return pages.find((x) => {
		x.id == id;
	});
}

export default function Home() {
	const [activeSection, setActiveSection] = useState("education");

	function onBecameActive(id: string) {
		setActiveSection(id);
	}

	function selectActive(id: string) {
		setActiveSection(id);
		window.scrollTo({
			top: document.getElementById(id).offsetTop - 60,
			behavior: "smooth",
		});
	}

	return (
		<>
			<Nav pages={pages} activeSection={activeSection} selectActive={selectActive} />
			<Content pages={pages} className="md:ml-72" onBecameActive={onBecameActive} />
			<Footer />
		</>
	);
}
