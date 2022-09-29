import React from "react";

import IconLink from "./IconLink";


interface SectionEntryData extends React.HTMLAttributes<HTMLElement>  {
    title?: string;
    subtitle?: string;
    date?: string;
    githubUrl?: string;
    genericLink?: string;
    googlePlay?: string;
    children?: React.ReactNode;
    className?: string;
}


function SectionEntry({ title, subtitle, date, githubUrl, genericLink, googlePlay, children, className, ...attributes }: SectionEntryData) {

    return <>
        <div {...attributes}>
            {title && <h2 className="text-2xl text-stone-800 font-bold">{title}</h2>}
            <div className="flex flex-col md:flex-row">
                {subtitle && <h3 className="flex-1 text-lg font-medium text-stone-500">{subtitle}</h3>}
                {date && <p className="flex-none">{date}</p>}
            </div>
            {(githubUrl || genericLink) &&
                <div className="flex mt-5">
                    {googlePlay && <IconLink aria-label="Google Play URL" circular className="text-5xl" name={{ prefix: "fab", iconName: "google-play" }} href={googlePlay} />}
                    {githubUrl && <IconLink aria-label="Github URL" circular className="text-5xl" name={{ prefix: "fab", iconName: "github" }} href={githubUrl} />}
                    {genericLink && <IconLink circular aria-label="Project Link" className="text-5xl" name={{ prefix: "fas", iconName: "link" }} href={genericLink} />}
                </div>}

            <div className="max-w-3xl mt-5">
                <div className={className} >{children}</div>
            </div>

        </div>

    </>
}

export default SectionEntry;