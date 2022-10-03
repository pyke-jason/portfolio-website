import PageProps from "interfaces/PageProps";
import { useEffect, useRef } from "react";
import Section, { SectionData } from "./Section";

interface TitledSection extends SectionData {
}

function TitledSection({ children, data, ...attributes }: TitledSection) {
	return (
		<Section className="py-16" {...attributes} data={data}>
			<h1 className="text-2xl font-bold tracking-tight text-zinc-800  sm:text-5xl">{data.title}</h1>
			{children}
		</Section>
	);
}

export default TitledSection;
