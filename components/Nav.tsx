import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { PageDictionary } from "interfaces/PageDictionary";
import { ActiveSectionContext, ActiveSectionDispatchContext, SectionAssignment } from "pages/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";

import UserSkeleton from "./UserSkeleton";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { type } from "os";
import { PageData } from "interfaces/PageData";

interface MenuItemData {
	page: PageData;
	className?: string;
	active?: boolean;
	children?: React.ReactNode;
	selectActive?: any;
}
function MenuItem({ page, className, active, selectActive }: MenuItemData) {
	return (
		<li className={className}>
			<button
				onClick={() => {
					selectActive && selectActive(page);
				}}
				className={`${active ? "text-teal-400" : "text-zinc-800"} transition-all font-medium text-sm p-3`}
			>
				{page.title}
				{active && (
					<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
				)}
			</button>
		</li>
	);
}
function SmallMenuItem({ page, className, children, selectActive }: MenuItemData) {
	return (
		<button
			className={className}
			onClick={() => {
				// (page) => {
				// 	if (isOpen) {
				// 		selectActive(page);
				// 		setIsOpen(false);
				// 	} else {
				// 		setIsOpen(true);
				// 	}
				// }
				selectActive && selectActive(page);
			}}
		>
			{page.title}
			{children}
		</button>
	);
}

let maxScrollY = 0;

interface NavData {
	pages: PageData[];
}

function Nav({ pages }: NavData) {
	const [isOpen, setIsOpen] = useState(false);
	const [atTop, setAtTop] = useState(true);
	const [loading, setLoading] = useState(true);
	const maxHeight = 180;
	const minMb = 116;
	const navHeight = 64;
	const activeSection = useContext(ActiveSectionContext);
	const dispatch = useContext(ActiveSectionDispatchContext);

	function selectActive(page) {
		dispatch({ type: "select", page: page });
	}
	useScrollPosition(({ prevPos, currPos }) => {
		updateScroll(-currPos.y, Math.min(-currPos.y, maxHeight));
	});

	function updateScroll(scroll: number, amount: number) {
		if (scroll > maxScrollY) {
			if (scroll - maxScrollY > navHeight) {
				maxScrollY = scroll - navHeight;
			}
		} else {
			if (maxScrollY - scroll > navHeight) {
				maxScrollY = scroll + navHeight;
			}
		}

		document.documentElement.style.setProperty(
			"--avatar-image-transform",
			`translate3d(0px, 0px, 0px) scale(${0.5 + (maxHeight - amount) / (2 * maxHeight)})`
		);
		document.documentElement.style.setProperty("--header-height", `${Math.max(maxScrollY, maxHeight)}px`);
		// document.documentElement.style.setProperty('--header-height', `${minMb}px`);
		document.documentElement.style.setProperty("--header-mb", `-${Math.max(maxScrollY - maxHeight + minMb, minMb)}px`);
		// document.documentElement.style.setProperty('--header-mb', `${minMb}px`);
		document.documentElement.style.setProperty("--content-offset", `${minMb}px`);
	}

	// function updateScroll(scroll: number, amount: number) {
	// 	if (scroll > maxScrollY) {
	// 			maxScrollY = scroll - navHeight;
	// 	}
	// 	else {
	// 			maxScrollY = scroll + navHeight;
	// 	}

	// 	// document.documentElement.style.setProperty('--avatar-image-transform', `translate(0, ${amount}px) scale(${0.5 + 1 - amount / (2 * maxHeight)})`);
	// 	document.documentElement.style.setProperty('--header-height', `${Math.max(maxScrollY, maxHeight)}px`);
	// 	// document.documentElement.style.setProperty('--header-height', `${minMb}px`);
	// 	document.documentElement.style.setProperty('--header-mb', `-${Math.max(maxScrollY, maxHeight)}px`);
	// 	// document.documentElement.style.setProperty('--header-mb', `${minMb}px`);
	// 	document.documentElement.style.setProperty('--content-offset', `${minMb}px`);
	// }

	return (
		<>
			<nav
				style={{ height: "var(--header-height)", marginBottom: "var(--header-mb)" }}
				className={`${isOpen ? "" : ""} ${atTop ? "" : ""} relative z-50 flex flex-col`}
			>
				<div id="mobile-menu" className="md:hidden w-full">
					{pages.map((page, i) => {
						const isActive = activeSection.id === page.id;
						return (
							(isOpen || isActive) && (
								<SmallMenuItem
									className={`${isActive && isOpen ? "bg-zinc-200" : ""} w-full block px-10 py-5 text-base`}
									page={page}
									key={i}
									selectActive={selectActive}
								>
									{!isOpen && isActive && <FontAwesomeIcon color="gray" className="ml-4" icon={faChevronDown} />}
								</SmallMenuItem>
							)
						);
					})}
				</div>
				<div className="hidden sticky top-0 pt-6 md:block mx-auto ">
					<ul className="flex rounded-full my-auto shadow-lg shadow-zinc-800/5 px-4 ring-1 backdrop-blur ring-zinc-900/5 border-zinc-200 bg-white/90">
						{pages.map((x, i) => (
							<MenuItem
								key={i}
								page={x}
								className={"relative block"}
								active={activeSection.id === x.id}
								selectActive={selectActive}
							/>
						))}
					</ul>
				</div>
				<div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>

				<div className="sm:px-8 top-0 order-last">
					<div className="flex">
						<button
							onClick={() => selectActive(pages[0])}
							style={{ transform: "var(--avatar-image-transform)" }}
							className={`${
								atTop ? "" : "border-zinc-200 shadow-lg shadow-zinc-800/5"
							} overflow-hidden w-24 h-24 border-4 border-white relative rounded-full hidden md:block `}
						>
							<Image
								sizes="4rem"
								onLoadingComplete={() => setLoading(false)}
								src="/images/headshot.JPG"
								width={"256px"}
								height={"256px"}
								alt="Profile picture"
								className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
							/>
							{loading && <UserSkeleton className="w-full h-full" iconSize="8x" />}
						</button>
						{/* <p className="text-xl text-zinc-800 font-medium uppercase mb-5">Jason Pyke</p> */}
					</div>
				</div>
			</nav>
			<div style={{ height: "var(--content-offset)" }}></div>
		</>
	);
}

export default Nav;
