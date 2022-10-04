import Content from "@components/Content";
import Nav from "@components/Nav";

import Footer from "@components/Footer";
import Head from "next/head";
import React from "react";
import App from "@components/App";
import { Sections, SectionComponents } from "data/Sections";
import Background from "@components/Background";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jason Pyke</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Background>
				<App>
					<Nav pages={Sections} />
					<Content pages={SectionComponents} />
				</App>
				<Footer />
			</Background>
		</>
	);
}
