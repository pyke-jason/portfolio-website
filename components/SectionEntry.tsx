import React from "react";
import IconButton from "@components/IconButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    IconLookup,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'


interface SectionEntryData {
    title?: string;
    subtitle?: string;
    date?: string;
    githubUrl?: string;
    genericLink?: string;
    children?: React.ReactNode
}

function createIcon(name: IconLookup, url: string) {
    return <IconButton
        className="text-slate-800 hover:text-slate-500 fa-layers fa-fw fa-si text-5xl"
        link={url} >
        <FontAwesomeIcon icon={findIconDefinition({ prefix: "fas", iconName: "circle" })} />
        <FontAwesomeIcon icon={findIconDefinition(name)} inverse transform="shrink-8" />
    </IconButton>
}

function SectionEntry({ title, subtitle, date, githubUrl, genericLink, children }: SectionEntryData) {

    return <>
        <div className="mt-6 mb-12">
            <div className="flex">
                {title && <h2 className="flex-1 text-2xl font-medium">{title}</h2>}
                {date && <p className="flex-none">{date}</p>}
            </div>
            {subtitle && <h3 className="text-lg uppercase font-light">{subtitle}</h3>}
            {(githubUrl || genericLink) &&
                <div className="flex mt-5">
                    {githubUrl && createIcon({ prefix: "fab", iconName: "github" }, githubUrl)}
                    {genericLink && createIcon({ prefix: "fas", iconName: "link" }, genericLink)}
                </div>}

            <div className="max-w-4xl mt-5">
                {children}
            </div>

        </div>

    </>
}

export default SectionEntry;