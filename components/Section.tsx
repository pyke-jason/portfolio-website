import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import PageProps from "interfaces/PageProps";
import { ActiveSectionContext, ActiveSectionDispatchContext } from "pages";
import { useContext, useEffect, useRef } from "react";
import { isRegExp } from "util/types";

export interface SectionData extends PageProps {
	children?: React.ReactNode;
	border?: boolean;
}

function Section({ children, className, data, border, ...attributes }: SectionData) {
	const ref = useRef(null);
	const dispatch = useContext(ActiveSectionDispatchContext);
	const activeSection = useContext(ActiveSectionContext);

	function updateScroll(amount) {
		if (ref === null || ref.current === undefined) return;
		const { offsetTop, offsetHeight } = ref.current;
		const offsetBottom = offsetTop + offsetHeight;
		const scrollMid = amount + 400;
		if (scrollMid >= offsetTop && scrollMid <= offsetBottom) {
			if (activeSection.id !== data.id) {
				dispatch({ type: "in-view", page: data });
			}
		}
	}

	if (data !== null) {
		useScrollPosition(({ prevPos, currPos }) => {
			updateScroll(-currPos.y);
		});
	}

	return (
		<>
			<section id={data.id} ref={ref} {...attributes}>
				<div className={`${className} sm:px-8 mt-9`}>
					<div className="mx-auto max-w-7xl lg:px-8  ">
						<div className={`relative px-4 sm:px-8 lg:px-12 ${border ? "border-b" : ""}`}>
							<div className="mx-auto max-w-2xl lg:max-w-5xl space-y-12">{children}</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Section;
