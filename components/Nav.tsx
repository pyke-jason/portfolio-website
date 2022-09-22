import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import {
  IconLookup,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { PageDictionary } from "interfaces/PageDictionary";

function Nav({ pages }: PageDictionary) {
  const [isOpen, setIsOpen] = useState(false);

  function MenuItem({ title, url }: any) {
    return <a
      href={url}
      className="text-gray-300 hover:text-white py-2 text-lg uppercase font-medium"
    >
      {title}
    </a>
  }

  function SmallMenuItem({ title, url }: any) {
    return <a
      href={"#" + url}
      className="text-gray-300 hover:text-white block px-10 py-2 text-base font-medium"
    >
      {title}
    </a>
  }

  return (
    <div>
      <aside className="py-3 bg-blue-400 md:sticky md:top-0 md:w-72 md:h-screen flex flex-col">
        <div className="my-auto px-10">
          <div className="flex items-center justify-between md:justify-center">
            <div className="hidden md:block mb-3">
              <Image src="/images/headshot-circle.png" width="170px" height="170px" />
            </div>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white md:hidden block py-2 text-base font-medium">
              {pages[0].title}
            </a>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-white"
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
          <div className="hidden md:block">
            <div className="flex items-center flex-col flex-cent">
              {pages.map((x) => <MenuItem title={x.title} url={"#" + x.url} />)}
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
            <div id="mobile-menu md:hidden">
              <div ref={ref} className="pt-2 pb-3 space-y-1">
                {pages.map((x) => <SmallMenuItem title={x.title} url={"#" + x.url} />)}
              </div>
            </div>
          )}
        </Transition>
      </aside>
    </div>
  );
}

export default Nav;
