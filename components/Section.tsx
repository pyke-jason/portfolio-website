import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import PageProps from "interfaces/PageProps";
import { ActiveSectionContext, ActiveSectionDispatchContext } from "pages";
import { useContext, useEffect, useRef } from "react";

export interface SectionData extends PageProps {
	children?: React.ReactNode;
}

function Section({ children, className, data, ...attributes }: SectionData) {
	const ref = useRef(null);
	const dispatch = useContext(ActiveSectionDispatchContext);
	const activeSection = useContext(ActiveSectionContext);

	function updateScroll(amount) {
		if (ref === null || ref.current === null) return;
		const { offsetTop, offsetHeight } = ref.current;
		const offsetBottom = offsetTop + offsetHeight;
		const scrollMid = amount + 400;
		if (scrollMid >= offsetTop && scrollMid <= offsetBottom) {
			if (activeSection.id !== data.id) {
				dispatch({ type: "in-view", page: data });
			}
		}
	}

	useScrollPosition(({ prevPos, currPos }) => {
		updateScroll(-currPos.y);
	});

	return (
		<>
			<section id={data.id} ref={ref} {...attributes}>
				<div className={`${className} space-y-12`}>{children}</div>
			</section>
		</>
	);
}

export default Section;
