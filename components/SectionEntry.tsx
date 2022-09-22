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
        className="text-slate-800 hover:text-slate-500 fa-layers fa-fw fa-si text-6xl"
        link={url} >
        <FontAwesomeIcon icon={findIconDefinition({ prefix: "fas", iconName: "circle" })} />
        <FontAwesomeIcon icon={findIconDefinition(name)} inverse transform="shrink-7" />
    </IconButton>
}

function SectionEntry({ title, subtitle, date, githubUrl, genericLink, children }: SectionEntryData) {

    return <>
        <div>
            <div className="flex">
                {title && <h2 className="flex-1">{title}</h2>}
                {date && <p className="flex-none">{date}</p>}
            </div>
            {githubUrl && createIcon({ prefix: "fab", iconName: "github" }, githubUrl)}
            {genericLink && createIcon({ prefix: "fas", iconName: "link" }, genericLink)}
            {subtitle && <h3>{subtitle}</h3>}
            {children}

        </div>

    </>
}

export default SectionEntry;