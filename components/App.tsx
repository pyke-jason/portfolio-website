import { Sections } from "data/Sections";
import { PageData } from "interfaces/PageData";
import React, { useReducer } from "react";

export type SectionAssignment = (page: PageData) => void;

export const ActiveSectionDispatchContext = React.createContext(null);
export const ActiveSectionContext = React.createContext(null);

const initialState = { ...Sections[0] };

interface SectionActionData {
	type: string;
	page: PageData;
}

function reducer(state: PageData, action: SectionActionData) {
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

export default function App({ children }) {
	const [activeSection, dispatch] = useReducer(reducer, initialState);

	return (
		<ActiveSectionDispatchContext.Provider value={dispatch}>
			<ActiveSectionContext.Provider value={activeSection}>{children}</ActiveSectionContext.Provider>
		</ActiveSectionDispatchContext.Provider>
	);
}
