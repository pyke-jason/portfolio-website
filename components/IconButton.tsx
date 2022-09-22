
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    IconLookup,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import Link from "next/link";

interface IconButtonData {
    href: string;
    name: IconLookup;
    className?: string;
    children?: React.ReactNode;
    circular?: boolean;
}

export default function IconButton({ name, href, className, circular, children }: IconButtonData) {
    return <Link href={href} >
        <a target="_blank" rel="noopener noreferrer" className={className}>
            <span className={"text-slate-800 hover:text-slate-500 fa-layers fa-fw fa-si"}>
                {circular && <FontAwesomeIcon icon={findIconDefinition({ prefix: "fas", iconName: "circle" })} />}
                {circular && <FontAwesomeIcon icon={findIconDefinition(name)} inverse transform="shrink-8" />}
                {!circular && <FontAwesomeIcon icon={findIconDefinition(name)} />}
            </span>
            {children}
        </a>
    </Link >
}