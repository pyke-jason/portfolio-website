import Link from "next/link";
import React from "react";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/solid";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconWithLink from "@components/IconWithLink";

interface SectionEntryData extends React.HTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
	date?: string;
	githubUrl?: string;
	genericLink?: string;
	googlePlay?: string;
	children?: React.ReactNode;
	className?: string;
}

// https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
const getHostnameFromRegex = (url) => {
	// run against regex
	const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
	// extract hostname (will be null if no match is found)
	return matches && matches[1];
};

function SectionEntry({ title, subtitle, date, githubUrl, genericLink, googlePlay, children, className, ...attributes }: SectionEntryData) {
	return (
		<>
			<div {...attributes}>
				{title && <h2 className="text-xl text-zinc-800 font-bold">{title}</h2>}
				<div className="flex flex-col md:flex-row">
					{subtitle && <h3 className="flex-1 text-lg font-medium text-zinc-500">{subtitle}</h3>}
					{date && <p className="flex-none text-zinc-400">{date}</p>}
				</div>

				<div className="max-w-3xl mt-5">
					<div className={className}>{children}</div>
				</div>
				{(googlePlay || githubUrl || genericLink) && (
					<div className="flex flex-col md:flex-row mt-5 pl-4 md:ml-6 md:space-x-8">
						{googlePlay && (
							<IconWithLink
								href={googlePlay}
								aria-label="Google Play URL"
								className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
							>
								<FontAwesomeIcon className="flex-none my-auto h-4 w-4" icon={faGooglePlay} />
								<span className="ml-4">play.google.com</span>
							</IconWithLink>
						)}
						{githubUrl && (
							<IconWithLink
								href={githubUrl}
								aria-label="Project Github URL"
								className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
							>
								<FontAwesomeIcon className="flex-none my-auto h-4 w-4" icon={faGithub} />
								<span className="ml-4">github.com</span>
							</IconWithLink>
						)}
						{genericLink && (
							<IconWithLink
								href={genericLink}
								aria-label="Project Website"
								className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
							>
								<LinkIcon className="flex-none my-auto h-4 w-4" />
								<span className="ml-4">{getHostnameFromRegex(genericLink)}</span>
							</IconWithLink>
						)}
					</div>
				)}
			</div>
		</>
	);
}

export default SectionEntry;
