
import { Menu, Transition } from '@headlessui/react'
import { Fragment, SVGProps, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import IconLink from './IconLink'

export default function ContactDropdown() {
  return (
    <Menu as="div" className="w-32 relative inline-block text-left">
      <div>
        <Menu.Button className="w-full inline-flex rounded-md px-4 py-2 text-sm border-stone-400 font-medium border hover:shadow-lg text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Contact
          <FontAwesomeIcon className="ml-6 mt-0.5 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" icon={faChevronDown} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>

            <IconLink noHighlight className={`hover:bg-violet-500 text-stone-800 hover:text-white group flex w-full items-center rounded-md px-2 py-2 text-2xl`} name={{ prefix: "fas", iconName: "envelope" }} href="https://github.com/pyke-jason/portfolio-website" ><p className="ml-4 text-lg">Email</p></IconLink>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}