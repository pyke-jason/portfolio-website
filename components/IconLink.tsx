
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    IconLookup,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import Link from "next/link";

interface IconLinkData extends React.HTMLAttributes<HTMLElement> {
    href: string;
    name: IconLookup;
    noHighlight?: boolean;
    children?: React.ReactNode;
    circular?: boolean;
}

export default function IconLink({ name, href, className, noHighlight: disableHighlight, circular, children, ...attributes}: IconLinkData) {
    return <Link href={href} >
        <a target="_blank" rel="noopener noreferrer" {...attributes} className={`transition-colors text-stone-900 hover:text-stone-600 outline-none  ${className}`}>
            <span className={"fa-layers fa-fw fa-si"}>
                {circular && <FontAwesomeIcon className='font-medium' icon={findIconDefinition({ prefix: "fas", iconName: "circle" })} />}
                {circular && <FontAwesomeIcon icon={findIconDefinition(name)} inverse transform="shrink-8" />}
                {!circular && <FontAwesomeIcon icon={findIconDefinition(name)} />}
            </span>
            {children}
        </a>
    </Link >
}