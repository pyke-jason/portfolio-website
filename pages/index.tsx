import Content from "@components/Content";
import Nav from "@components/Nav";
import TitlePage from "@components/TitlePage";
import Achievements from "@components/Achievements";
import Background from "@components/Background";
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
	{ title: "Background", id: "background", component: Background },
	{ title: "Projects", id: "projects", component: Projects },
	{ title: "Skills", id: "skills", component: Skills },
	{ title: "Achievements", id: "awards", component: Achievements },
];

const sections: PageData[] = sectionComponents.map((raw) => {
	return { title: raw.title, id: raw.id };
});

export const ActiveSectionDispatchContext = React.createContext(null);
export const ActiveSectionContext = React.createContext(null);

const initialState = { ...sections[0] };

function reducer(state, action) {
	switch (action.type) {
		case "select":
			console.log("select");
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
			<div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
				<div className="fixed inset-0 flex justify-center sm:px-8">
					<div className="flex w-full max-w-7xl lg:px-8">
						<div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
					</div>
				</div>
				<div className="relative">
					<ActiveSectionDispatchContext.Provider value={dispatch}>
						<ActiveSectionContext.Provider value={activeSection}>
							<Nav pages={sections} />
							<Content pages={sectionComponents} />
						</ActiveSectionContext.Provider>
					</ActiveSectionDispatchContext.Provider>
					<Footer />
				</div>
			</div>
		</>
	);
}
