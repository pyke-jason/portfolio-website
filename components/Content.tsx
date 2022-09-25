import { PageDictionary } from "interfaces/PageDictionary";
import { useState } from "react";
import Footer from "./Footer";

interface ContentData extends PageDictionary {
	onBecameActive: any;
	className?: string;
}

export default function Content({ className, pages, onBecameActive }: ContentData) {
	return (
		<>
			<main className={className}>
				{pages.map((page) => (
					<page.component key={page.id} data={page} onBecameActive={onBecameActive} />
				))}
			</main>
		</>
	);
}
