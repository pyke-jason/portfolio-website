import Link from "next/link";
import React from "react";

import IconLink from "./IconLink";
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/solid'



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

function IconWithLink({ href, children, ...props }: React.LinkHTMLAttributes<HTMLElement>) {
    return <Link href={href} >
        <a href={href} {...props}>{children}</a>
    </Link>
}


function SectionEntry({ title, subtitle, date, githubUrl, genericLink, googlePlay, children, className, ...attributes }: SectionEntryData) {

    return <>
        <div {...attributes}>
            {title && <h2 className="text-2xl text-zinc-800 font-bold">{title}</h2>}
            <div className="flex flex-col md:flex-row">
                {subtitle && <h3 className="flex-1 text-lg font-medium text-zinc-500">{subtitle}</h3>}
                {date && <p className="flex-none">{date}</p>}
            </div>
            {(githubUrl || genericLink) &&
                <div className="flex mt-5 space-x-4">
                    {googlePlay && <IconWithLink href={googlePlay} aria-label="Google Play URL" className="text-sm text-zinc-400 hover:text-teal-500 font-medium flex relative items-center"><LinkIcon className="flex-none h-6" /><span className="ml-4">play.google.com</span></IconWithLink>}
                    {googlePlay && <IconLink aria-label="Google Play URL" className="text-sm" name={{ prefix: "fab", iconName: "google-play" }} href={googlePlay}>play.google.com</IconLink>}
                    {githubUrl && <IconLink aria-label="Github URL" className="text-3xl" name={{ prefix: "fab", iconName: "github" }} href={githubUrl}>github.com</IconLink>}
                    {genericLink && <IconLink aria-label="Project Link" className="text-3xl" name={{ prefix: "fas", iconName: "link" }} href={genericLink}>linebylinestudios.com</IconLink>}
                </div>}

            <div className="max-w-3xl mt-5">
                <div className={className} >{children}</div>
            </div>

        </div>

    </>
}

export default SectionEntry;