import Content from "@components/Content";
import Nav from "@components/Nav";

import Footer from "@components/Footer";
import Head from "next/head";
import React from "react";
import App from "@components/App";
import { Sections, SectionComponents } from "data/Sections";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jason Pyke</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="flex h-full flex-col bg-zinc-50 ">
				<div className="fixed inset-0 flex justify-center sm:px-8">
					<div className="flex w-full max-w-7xl lg:px-8">
						<div className="w-full bg-white ring-1 ring-zinc-100  "></div>
					</div>
				</div>
				<div className="relative">
					<App>
						<Nav pages={Sections} />
						<Content pages={SectionComponents} />
					</App>
					<Footer />
				</div>
			</div>
		</>
	);
}
