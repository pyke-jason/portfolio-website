import PageProps from "interfaces/PageProps";
import { useEffect, useRef } from "react";
import Section, { SectionData } from "./Section";

interface TitledSection extends SectionData {
	title: string;
}

function TitledSection({ children, data, onBecameActive, ...attributes }: TitledSection) {
	return (
		<div className="border-b">
			<Section className="px-4 py-16 max-w-4xl xl:px-20" {...attributes} onBecameActive={onBecameActive} data={data}>
				<h1 className="text-xl md:text-3xl text-stone-700 font-medium uppercase">{data.title}</h1>
				{children}
			</Section>
		</div>
	);
}

export default TitledSection;
