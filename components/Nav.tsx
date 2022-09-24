import React, { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { IconLookup, findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { PageDictionary } from "interfaces/PageDictionary";

interface MenuItemData {
	title: string;
	id: string;
	className?: string;
	active?: boolean;
	selectActive?: (id: string) => void;
}
function MenuItem({ title, id, className, selectActive, active }: MenuItemData) {
	return (
		<li className={className}>
			<button
				onClick={() => {
					selectActive && selectActive(id);
				}}
				className={`${
					active ? "border-stone-300 scale-105" : "border-white"
				} text-stone-800 border-b-2 transition-all hover:border-stone-300 pb-1 text-lg`}
			>
				{title}
			</button>
		</li>
	);
}

function SmallMenuItem({ title, id, className, active, selectActive }: MenuItemData) {
	return (
		<div className={className}>
			<button
				onClick={() => {
					selectActive && selectActive(id);
				}}
				className={`${
					active ? "text-stone-800 scale-105 bg-stone-100" : "text-blue-500"
				} text-left hover:bg-stone-300 block px-10 text-base font-medium`}
			>
				{title}
			</button>
		</div>
	);
}

interface NavData extends PageDictionary {
	activeSection?: any;
	selectActive: (id: string) => void;
}

function Nav({ pages, activeSection, selectActive }: NavData) {
	const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState({id: })
	return (
		<nav className="bg-white sticky md:fixed z-50 top-0 md:w-72 md:h-screen md:border-r md:flex text-center justify-center items-center">
			<Listbox value={selectedPerson} onChange={setSelectedPerson}>
				<Listbox.Button>{selectedPerson.name}</Listbox.Button>
				<Listbox.Options>
					{people.map((person) => (
						<Listbox.Option key={person.id} value={person} disabled={person.unavailable}>
							{person.name}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>

			<div className="hidden md:block">
				<button
					onClick={() => selectActive(pages[0].id)}
					className={`${
						activeSection == pages[0].id ? "border-stone-300 border" : "border-white"
					} w-40 h-40 rounded-full hidden md:block mb-3 hover:border-stone-300 border-2`}
				>
					<Image src="/images/headshot-circle.png" width="160px" height="160px" />
				</button>
				<ul className="space-y-2">
					{pages.map(
						(x, i) =>
							i != 0 && (
								<MenuItem key={i} active={activeSection === x.id} title={x.title} id={x.id} selectActive={selectActive} />
							)
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
