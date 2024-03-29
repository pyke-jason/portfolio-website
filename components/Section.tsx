import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import PageProps from "interfaces/PageProps";
import { ActiveSectionDispatchContext } from "@components/App";
import { useContext, useRef } from "react";

export interface SectionData extends PageProps {
	children?: React.ReactNode;
	border?: boolean;
}

function Section({ children, className, data, border, ...attributes }: SectionData) {
	const ref = useRef(null);
	const dispatch = useContext(ActiveSectionDispatchContext);

	function updateScroll(prevPos, amount) {
		if (ref === null || ref.current === undefined) return;
		const { offsetTop, offsetHeight } = ref.current;
		const offsetBottom = offsetTop + offsetHeight;
		const scrollMid = amount + 400;
		if (scrollMid >= offsetTop && scrollMid <= offsetBottom) {
			dispatch({ type: "in-view", page: data });
		}
	}

	useScrollPosition(({ prevPos, currPos }) => {
		updateScroll(-prevPos.y, -currPos.y);
	});

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
