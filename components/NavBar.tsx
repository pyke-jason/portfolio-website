import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    IconLookup,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

interface ContentData {
    className?: string;
}

function MenuItem({ title }: any) {
    return <li>
        <a href={title.toLowerCase()} className="block py-2 pr-4 pl-3rounded md:bg-transparent text-blue-700 md:p-0 dark:text-white" aria-current="page">{title}</a>
    </li>
}

function NavBar({ className }: ContentData) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={className}>
            <nav className="w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <button onClick={() => setExpanded(!expanded)} type="button" className="inline-flex items-center ml-3 text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <FontAwesomeIcon size={"3x"} icon={findIconDefinition({ prefix: "fas", iconName: "bars" })} />
                </button>
                <div className={expanded ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"}>
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 borderborder-gray-100 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <MenuItem title={"About"} />
                        <MenuItem title={"Experience"} />
                        <MenuItem title={"Education"} />
                        <MenuItem title={"Projects"} />
                        <MenuItem title={"Skills"} />
                        <MenuItem title={"Awards"} />
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;