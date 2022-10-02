import { PageDictionary } from "interfaces/PageDictionary";
import { useState } from "react";
import Footer from "./Footer";

interface ContentData extends PageDictionary {
	className?: string;
}

export default function Content({ className, pages }: ContentData) {
	return (
		<>
			<main className={className}>
				{pages.map((page) => (
					<page.component key={page.id} data={{ id: page.id, title: page.title }} />
				))}
			</main>
		</>
	);
}
