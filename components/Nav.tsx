import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PageDictionary } from "interfaces/PageDictionary";
import { SectionAssignment } from "pages/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { PageData } from "interfaces/PageData";
import UserSkeleton from "./UserSkeleton";

interface MenuItemData {
	page: PageData;
	className?: string;
	active?: boolean;
	children?: React.ReactNode;
	selectActive?: SectionAssignment;
}
function MenuItem({ page, className, selectActive, active }: MenuItemData) {
	return (
		<li className={className}>
			<button
				onClick={() => {
					selectActive && selectActive(page);
				}}
				className={`${
					active ? "border-stone-300 scale-105" : "border-white"
				} text-stone-800 border-b-2 transition-opacity hover:border-stone-300 pb-1 text-lg`}
			>
				{page.title}
			</button>
		</li>
	);
}

function SmallMenuItem({ page, className, children, selectActive }: MenuItemData) {
	return (
		<button
			className={className}
			onClick={() => {
				selectActive && selectActive(page);
			}}
		>
			{page.title}
			{children}
		</button>
	);
}

interface NavData extends PageDictionary {
	activeSection?: any;
	selectActive: SectionAssignment;
}

function Nav({ pages, activeSection, selectActive }: NavData) {
	const [isOpen, setIsOpen] = useState(false);
	const [atTop, setAtTop] = useState(true);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.onscroll = function () {
			if (window.scrollY == 0) {
				setAtTop(true);
			} else {
				setAtTop(false);
			}
		};
	}, []);
	return (
		<nav
			className={`${isOpen ? "max-h-96" : "max-h-20"} ${
				atTop ? "" : ""
			} border-b md:max-h-full transition-all md:transition-none bg-white sticky z-50 top-0 md:w-72 md:h-screen md:border-r overflow-hidden flex md:text-center md:items-center`}
		>
			<div id="mobile-menu" className="md:hidden w-full">
				{pages.map((page, i) => {
					const isActive = activeSection.id === page.id;
					return (
						(isOpen || isActive) && (
							<SmallMenuItem
								className={`${isActive && isOpen ? "bg-stone-200" : ""} w-full block px-10 py-5 text-base`}
								page={page}
								key={i}
								selectActive={(page) => {
									if (isOpen) {
										selectActive(page);
										setIsOpen(false);
									} else {
										setIsOpen(true);
									}
								}}
							>
								{!isOpen && isActive && <FontAwesomeIcon color="gray" className="ml-4" icon={faChevronDown} />}
							</SmallMenuItem>
						)
					);
				})}
			</div>

			<div className="hidden md:block ml-auto mr-auto xl:mr-12">
				<button
					onClick={() => selectActive(pages[0])}
					className={`${
						activeSection.id == pages[0].id ? "scale-105" : ""
					} overflow-hidden lg:w-36 lg:h-36 w-32 h-32 transition-transform relative rounded-full hidden md:block mb-8 hover:border-stone-300`}
				>
					<Image onLoadingComplete={() => setLoading(false)} src="/images/headshot.JPG" layout="fill" objectFit="cover" alt="Profile picture" />
					{loading && <UserSkeleton className="w-full h-full" iconSize="8x" />}
				</button>
				<ul className="space-y-6">
					{pages.map(
						(x, i) => i != 0 && <MenuItem key={i} page={x} active={activeSection.id === x.id} selectActive={selectActive} />
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
