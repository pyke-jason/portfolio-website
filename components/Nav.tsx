import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import {
  IconLookup,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { PageDictionary } from "interfaces/PageDictionary";
import Link from "next/link";

interface MenuItemData {
  title: string;
  id: string;
  className?: string;
  active?: boolean;
  selectActive?: (id: string) => void;
}
function MenuItem({ title, id, className, selectActive, active }: MenuItemData) {
  return <div className={className}>
    <button onClick={() => { selectActive && selectActive(id); }}
      className={`${active && "border-slate-900 scale-105"} text-stone-800 border-b-2 border-white transition-all focus:scale-105 focus:border-slate-900 hover:border-slate-300 pb-1 text-lg`}
    >
      {title}
    </button>
  </div>
}

function SmallMenuItem({ title, id, className, active }: MenuItemData) {
  return <div className={className}>
    <button
      className={`${active && "text-stone-800 scale-105"} text-blue-500 hover:text-stone-600 block px-10 py-2 text-base font-medium`}
    >
      {title}
    </button>
  </div>
}

interface NavData extends PageDictionary {
  activeSection?: string;
  selectActive: (id: string) => void;
}

function Nav({ pages, activeSection, selectActive: setActive }: NavData) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      <aside className="py-3 md:sticky md:top-0 md:border-r md:w-72 md:h-screen flex flex-col">
        <div className="my-auto">
          <div className="flex items-center justify-between md:justify-center">
            <button onClick={() => setActive(pages[0].id)} className="w-40 h-40 rounded-full hidden md:block mb-3 border-white hover:border-slate-900 border">
              <Image src="/images/headshot-circle.png" width="160px" height="160px" />
            </button>
            <SmallMenuItem className="md:hidden" id={activeSection} title={activeSection} />
            <div className="flex md:hidden mr-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex text-gray-300 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FontAwesomeIcon size={"xl"} icon={findIconDefinition({ prefix: "fas", iconName: "bars" })} />
                ) : (
                  <FontAwesomeIcon size={"xl"} icon={findIconDefinition({ prefix: "fas", iconName: "xmark" })} />
                )}
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-center space-y-4">
              {pages.map((x, i) => i != 0 && <MenuItem key={i} active={activeSection === x.id} title={x.title} id={x.id} selectActive={setActive} />)}
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
            <div id="mobile-menu" className="md:hidden">
              <div ref={ref} className="pt-2 pb-3 space-y-1">
                {pages.map((x, i) => i != 0 && <SmallMenuItem active={activeSection === x.id} key={i} title={x.title} id={x.id} selectActive={setActive} />)}
              </div>
            </div>
          )}
        </Transition>
      </aside>
    </div>
  );
}

export default Nav;
