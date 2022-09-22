import React from "react";

import IconButton from "./IconButton";


interface SectionEntryData {
    title?: string;
    subtitle?: string;
    date?: string;
    githubUrl?: string;
    genericLink?: string;
    googlePlay?: string;
    children?: React.ReactNode
}


function SectionEntry({ title, subtitle, date, githubUrl, genericLink, googlePlay, children }: SectionEntryData) {

    return <>
        <div className="mt-6 mb-12">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    {title && <h2 className="text-2xl font-bold">{title}</h2>}
                    {subtitle && <h3 className="text-lg font-medium">{subtitle}</h3>}
                </div>
                {date && <p className="flex-none">{date}</p>}
            </div>
            {(githubUrl || genericLink) &&
                <div className="flex mt-5">
                    {googlePlay && <IconButton circular className="text-5xl" name={{ prefix: "fab", iconName: "google-play" }} href={googlePlay} />}
                    {githubUrl && <IconButton circular className="text-5xl" name={{ prefix: "fab", iconName: "github" }} href={githubUrl} />}
                    {genericLink && <IconButton circular className="text-5xl" name={{ prefix: "fas", iconName: "link" }} href={genericLink} />}
                </div>}

            <div className="max-w-4xl mt-5">
                {children}
            </div>

        </div>

    </>
}

export default SectionEntry;