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
	active?: boolean;
	children?: React.ReactNode;
	selectActive?: any;
}
function MenuItem({ page, active, selectActive }: MenuItemData) {
	return (
		<li>
			<button
				onClick={() => {
					selectActive && selectActive(page);
				}}
				className={`${
					active ? "text-teal-500 dark:text-teal-400" : ""
				} relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400`}
			>
				{page.title}
				{active && (
					<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
				)}
			</button>
		</li>
	);
}
function SmallMenuItem({ page, children, selectActive }: MenuItemData) {
	return (
		<button
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
			`translate3d(0px, 0px, 0px) scale(${0.6 + Math.min(Math.max(minMb - scroll, 0), minMb) / (2 * minMb)})`
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
			<header
				className="pointer-events-none relative z-50 flex flex-col max-w-5xl mx-auto"
				style={{ height: "var(--header-height)", marginBottom: "var(--header-mb)" }}
			>
				<div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
				<div className="sm:px-8 top-0 order-last -mb-3 pt-3 sticky">
					<div className="mx-auto max-w-7xl lg:px-8">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="top-[var(--avatar-top,theme(spacing.3))] w-full sticky" /* ?? */>
									<div className="relative">
										<div className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"></div>
										<button
											aria-label="Home"
											onClick={() => selectActive(pages[0])}
											style={{ transform: "var(--avatar-image-transform)" }}
											className={"block h-16 w-16 origin-left pointer-events-auto"}
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="top-0 z-10 h-16 pt-6 sticky">
					<div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full sticky">
						<div className="mx-auto max-w-7xl lg:px-8">
							<div className="relative px-4 sm:px-8 lg:px-12">
								<div className="mx-auto max-w-2xl lg:max-w-5xl">
									<div className="relative flex gap-4">
										<div className="flex flex-1"></div>
										<div className="flex flex-1 justify-end md:justify-center">
											<div className="pointer-events-auto md:hidden" data-headlessui-state="">
												<button
													className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
													id="headlessui-popover-button-:Rqb6:"
													type="button"
													aria-expanded="false"
													data-headlessui-state=""
												>
													Menu
													<svg
														viewBox="0 0 8 6"
														aria-hidden="true"
														className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
													>
														<path
															d="M1.75 1.75 4 4.25l2.25-2.5"
															fill="none"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path>
													</svg>
												</button>
											</div>
											<nav className="pointer-events-auto hidden md:block">
												<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
													{pages.map((x, i) => (
														<MenuItem
															key={i}
															page={x}
															active={activeSection.id === x.id}
															selectActive={selectActive}
														/>
													))}
												</ul>
											</nav>
										</div>
										<div className="flex justify-end md:flex-1">
											<div className="pointer-events-auto">
												<button
													type="button"
													aria-label="Toggle dark mode"
													className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
												>
													<svg
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
														aria-hidden="true"
														className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
													>
														<path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
														<path
															d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
															fill="none"
														></path>
													</svg>
													<svg
														viewBox="0 0 24 24"
														aria-hidden="true"
														className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
													>
														<path
															d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div style={{ height: "var(--content-offset)" }}></div>
		</>
	);
}

export default Nav;
