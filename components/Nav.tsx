import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    IconLookup,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function MenuItem({ title }: any) {
    return <a
      href={title.toLowerCase()}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {title}
    </a>
  }

  function SmallMenuItem({ title }: any) {
    return <a
      href="#"
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {title}
    </a>
  }

  return (
    <div>
      <nav className="bg-gray-800 md:w-96">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Jason Pyke
                </a>
              </div>
            </div>
            <div className=" flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FontAwesomeIcon size={"xl"} icon={findIconDefinition({ prefix: "fas", iconName: "bars" })} />
                ) : (
                  <FontAwesomeIcon size={"xl"} icon={findIconDefinition({ prefix: "fas", iconName: "bars" })} />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <SmallMenuItem title={"About"} />
                <SmallMenuItem title={"Experience"} />
                <SmallMenuItem title={"Education"} />
                <SmallMenuItem title={"Projects"} />
                <SmallMenuItem title={"Skills"} />
                <SmallMenuItem title={"Awards"} />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
