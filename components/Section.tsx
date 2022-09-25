import PageProps from "interfaces/PageProps";
import { useEffect, useRef } from "react";

export interface SectionData extends PageProps {
	children?: React.ReactNode;
}

function Section({ children, className, data, onBecameActive }: SectionData) {
	const ref = useRef();
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);

	function handleScroll() {
		const { offsetTop, offsetHeight } = ref.current;
		const offsetBottom = offsetTop + offsetHeight;
		const scrollMid = window.scrollY + window.innerHeight / 2;
		if (scrollMid >= offsetTop && scrollMid <= offsetBottom) {
			onBecameActive(data);
		}
	}

	return (
		<>
			<section id={data.id} ref={ref}>
				<div className={`${className} space-y-12`}>{children}</div>
			</section>
		</>
	);
}

export default Section;
