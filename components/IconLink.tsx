
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    IconLookup,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import Link from "next/link";

interface IconLinkData {
    href: string;
    name: IconLookup;
    noHighlight?: boolean;
    className?: string;
    children?: React.ReactNode;
    circular?: boolean;
}

export default function IconLink({ name, href, className, noHighlight: disableHighlight, circular, children }: IconLinkData) {
    return <Link href={href} >
        <a target="_blank" rel="noopener noreferrer" className={`transition-transform hover:scale-105 ${className}`}>
            <span className={`${!disableHighlight && "text-stone-900"} fa-layers fa-fw fa-si`}>
                {circular && <FontAwesomeIcon className='font-medium' icon={findIconDefinition({ prefix: "fas", iconName: "circle" })} />}
                {circular && <FontAwesomeIcon icon={findIconDefinition(name)} inverse transform="shrink-8" />}
                {!circular && <FontAwesomeIcon icon={findIconDefinition(name)} />}
            </span>
            {children}
        </a>
    </Link >
}