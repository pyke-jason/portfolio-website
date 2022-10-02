import Content from "@components/Content";
import Nav from "@components/Nav";
import TitlePage from "@components/TitlePage";
import Achievements from "@components/Achievements";
import Education from "@components/Education";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import { useReducer, useState } from "react";
import Footer from "@components/Footer";
import { PageData } from "interfaces/PageData";
import Head from "next/head";
import React from "react";
import { PageComponentData } from "interfaces/PageComponentData";

export type SectionAssignment = (page: PageData) => void;

const sectionComponents: PageComponentData[] = [
	{ title: "About", id: "about", component: TitlePage },
	{ title: "Education", id: "education", component: Education },
	{ title: "Experience", id: "experience", component: Experience },
	{ title: "Projects", id: "projects", component: Projects },
	{ title: "Skills", id: "skills", component: Skills },
	{ title: "Achievements", id: "awards", component: Achievements },
];

const allowed = ["title", "id"];
const sections: PageData[] = sectionComponents.map((raw) => {
	return { title: raw.title, id: raw.id };
});

export const ActiveSectionDispatchContext = React.createContext(null);
export const ActiveSectionContext = React.createContext(null);

const initialState = { ...sections[0] };

function reducer(state, action) {
	switch (action.type) {
		case "select":
			window.scrollTo({
				// top of section - 1/4 of window innerheight - navbar height
				top: document.getElementById(action.page.id).offsetTop - window.innerHeight / 4 - 80,
			});
			return action.page;
		case "in-view":
			return action.page;
		default:
			throw new Error();
	}
}

export default function Home() {
	const [activeSection, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<Head>
				<title>Jason Pyke</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<div className="relative">
				<ActiveSectionDispatchContext.Provider value={dispatch}>
					<ActiveSectionContext.Provider value={activeSection}>
						<Nav pages={sections} />
						<Content pages={sectionComponents} className="mx-auto max-w-5xl" />
					</ActiveSectionContext.Provider>
				</ActiveSectionDispatchContext.Provider>
				<Footer />
			</div>
		</>
	);
}
