import React from "react";
import { IoLink, IoLogoGithub } from "react-icons/io5";
import IconButton from "./IconButton";

interface SectionEntryData {
    title?: string;
    subtitle?: string;
    date?: string;
    githubUrl?: string;
    genericLink?: string;
    children?: React.ReactNode
}


function SectionEntry({ title, subtitle, date, githubUrl, genericLink, children }: SectionEntryData) {

    return <>
        <div>
            {title && <h2>{title}</h2>}
            {githubUrl && <IconButton link={githubUrl}><IoLogoGithub /></IconButton>}
            {genericLink && <IconButton link={genericLink}><IoLink /></IconButton>}
            {subtitle && <h3>{subtitle}</h3>}
            {date && <p>{date}</p>}
            {children}

        </div>

    </>
}

export default SectionEntry;