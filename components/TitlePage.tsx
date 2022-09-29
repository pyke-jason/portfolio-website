import PageProps from "interfaces/PageProps";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Section from "./Section";
import { UrlObject } from "url";
import ContactDropdown from "./ContactDropdown";
import IconLink from "./IconLink";
import UserSkeleton from "./UserSkeleton";

interface StyledLinkData extends React.HTMLAttributes<HTMLElement> {
	href: string;
	children?: React.ReactNode;
}
function StyledLink({ href, children, ...attributes }: StyledLinkData) {
	return (
		<div {...attributes}>
			<Link href={href}>
				<a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
					{children}
				</a>
			</Link>
		</div>
	);
}

function TitlePage({ data, onBecameActive }: PageProps) {
	const [loading, setLoading] = useState(true);
	return (
		<>
			<div className="fancy-background">
				<Section
					className="lines-background py-12 px-4 xl:px-20 border-b md:h-screen flex flex-col"
					data={data}
					onBecameActive={onBecameActive}
				>
					<div className="my-auto text-center md:text-left">
						<div className={`mx-auto md:hidden mb-20 w-56 h-56 rounded-full relative overflow-hidden`}>
							<Image onLoadingComplete={() => setLoading(false)} src="/images/headshot.JPG" layout="fill" objectFit="cover"  alt="Profile picture"/>
							{loading && <UserSkeleton className="w-full h-full" iconSize="8x" />}
						</div>
						<h1 className="text-5xl title md:text-7xl xl:text-8xl font-bold uppercase mb-5">Jason Pyke</h1>
						<h2 className="text-2xl mb-5">Software Engineer</h2>
						<h3 className="mb-5">Seattle, WA - pyke.jason1@gmail.com</h3>
						<p className="mb-12">Passionate software engineer who enjoys solving problems and building applications.</p>
						<StyledLink href="/resume.pdf" className="mb-12">
							Resume (PDF)
						</StyledLink>
						<div className="flex items-center">
							<IconLink
								aria-label="LinkedIn URL"
								circular
								className="text-5xl"
								href="https://www.linkedin.com/in/jason-pyke/"
								name={{ prefix: "fab", iconName: "linkedin" }}
							/>
							<IconLink
								aria-label="Github URL"
								circular
								className="text-5xl"
								href="https://github.com/pyke-jason"
								name={{ prefix: "fab", iconName: "github" }}
							/>
							<IconLink
								aria-label="Email"
								circular
								className="text-5xl"
								href="mailto:pyke.jason1@gmail.com"
								name={{ prefix: "fas", iconName: "envelope" }}
							/>
						</div>
					</div>
				</Section>
			</div>
		</>
	);
}

export default TitlePage;
