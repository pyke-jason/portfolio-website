import PageProps from "interfaces/PageProps";
import Link from "next/link";
import React, { useState } from "react";
import Section from "./Section";
import { ArrowDownIcon, EnvelopeIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { faGithub, faGooglePlay, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconWithLink from "./IconWithLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadResume from "./DownloadResume";

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

function TitlePage({ data }: PageProps) {
	const [loading, setLoading] = useState(true);
	return (
		<>
			<Section data={data} border>
				<div className="max-w-2xl">
					{/* <div className={`mx-auto md:hidden mb-20 w-56 h-56 rounded-full border-8 border-slate-100 relative overflow-hidden`}>
								<Image onLoadingComplete={() => setLoading(false)} src="/images/headshot.JPG" layout="fill" objectFit="cover"  alt="Profile picture"/>
								{loading && <UserSkeleton className="w-full h-full" iconSize="8x" />}
							</div> */}
					<h1 className="text-5xl font-bold mb-16">Jason Pyke's portfolio website.</h1>
					<div className="mb-12 text-base text-zinc-600">
						I'm Jason, a software engineer and game design hobbyist based in Seattle. I'll be graduating from the University of
						Washington in December with a degree in{" "}
						<span className="font-bold group hover:text-zinc-500 inline-flex flex-col">
							<span>
								Informatics
								<InformationCircleIcon className="ml-[1px] -mr-1 pb-1 h-6 w-6 inline transition fill-zinc-600 group-hover:fill-zinc-500" />
							</span>
							<div
								role="tooltip"
								className="absolute hidden group-hover:inline-block z-10 mt-10 text-sm max-w-md p-4 font-normal text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur rounded-xl   "
							>
								The term “informatics” broadly describes the study, design, and development of information technology for
								the good of people, organizations, and society. - UW iSchool
							</div>
						</span>
						. I'm very passionate about building thoughftul solutions to modern problems.
					</div>
					<DownloadResume className="w-48" />
					<div className="flex items-center space-x-6 my-16">
						<IconWithLink
							className="h-7 w-7 text-xl text-zinc-500 hover:text-zinc-600"
							aria-label="LinkedIn URL"
							href="https://www.linkedin.com/in/jason-pyke/"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</IconWithLink>
						<IconWithLink
							className="h-7 w-7 text-xl text-zinc-500 hover:text-zinc-600"
							aria-label="Github URL"
							href="https://github.com/pyke-jason"
						>
							<FontAwesomeIcon icon={faGithub} />
						</IconWithLink>
						<IconWithLink
							className="h-6 w-6 text-zinc-500 hover:text-zinc-600"
							aria-label="Email"
							href="mailto:pyke.jason1@gmail.com"
						>
							<EnvelopeIcon />
						</IconWithLink>
					</div>
				</div>
			</Section>
		</>
	);
}

export default TitlePage;
