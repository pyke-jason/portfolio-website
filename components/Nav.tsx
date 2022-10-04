import React, { Fragment, useContext, useEffect } from "react";
import Image from "next/image";
import { ActiveSectionContext, ActiveSectionDispatchContext } from "@components/App";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { PageData } from "interfaces/PageData";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";

interface MenuItemData {
	page: PageData;
	active?: boolean;
	children?: React.ReactNode;
	selectActive?: any;
}
interface MenuProps {
	selectActive: any;
	pages: PageData[];
}

function MobileMenuItem({ page, active, selectActive }: MenuItemData) {
	return (
		<Menu.Item>
			<button
				onClick={() => selectActive(page)}
				className={`${
					active ? "text-teal-500 " : ""
				} text-zinc-800 relative block text-left px-4 py-4 transition hover:text-teal-500 :text-teal-400 w-full`}
			>
				{page.title}
			</button>
		</Menu.Item>
	);
}

function MobileDropdown({ pages, selectActive }: MenuProps) {
	const activeSection: PageData = useContext(ActiveSectionContext);

	return (
		<Menu as="div" className="pointer-events-auto md:hidden relative inline-block text-left">
			<div>
				<Menu.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur    :ring-white/20">
					{activeSection.title}
					<ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
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
				<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 ">
						{pages.map(
							(x, i) =>
								i > 0 && <MobileMenuItem key={i} page={x} active={activeSection.id === x.id} selectActive={selectActive} />
						)}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

function MenuItem({ page, active, selectActive }: MenuItemData) {
	return (
		<li>
			<button
				onClick={() => {
					selectActive && selectActive(page);
				}}
				className={`${active ? "text-teal-500 " : ""} relative block px-3 py-2 transition hover:text-teal-500 :text-teal-400`}
			>
				{page.title}
				{active && (
					<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0   "></span>
				)}
			</button>
		</li>
	);
}

let maxScrollY = 0;

interface NavData {
	pages: PageData[];
}

function TopBarComponents({ pages, selectActive }: MenuProps) {
	const activeSection: PageData = useContext(ActiveSectionContext);

	return (
		<>
			{pages.map(
				(x: PageData, i: React.Key) =>
					i > 0 && <MenuItem key={i} page={x} active={activeSection.id === x.id} selectActive={selectActive} />
			)}
		</>
	);
}

function Nav({ pages }: NavData) {
	const maxHeight = 180;
	const navHeight = 64;
	const minMb = maxHeight - navHeight;
	const dispatch = useContext(ActiveSectionDispatchContext);

	function selectActive(page: PageData) {
		if (page !== undefined) {
			maxScrollY = Infinity;
			dispatch({ type: "select", page: page });
		}
	}
	useScrollPosition(({ prevPos, currPos }) => {
		updateScroll(-currPos.y, Math.min(-currPos.y, maxHeight));
	});

	useEffect(() => {
		updateScroll(0, 0);
	}, []);

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
			`translate3d(1px, 0px, 0px) scale(${0.6 + Math.min(Math.max(minMb - scroll, 0), minMb) / (2 * minMb)})`
		);
		document.documentElement.style.setProperty("--header-height", `${Math.max(maxScrollY, maxHeight)}px`);
		document.documentElement.style.setProperty("--header-mb", `-${Math.max(maxScrollY - maxHeight + minMb, minMb)}px`);
		document.documentElement.style.setProperty("--content-offset", `${minMb}px`);
	}

	return (
		<>
			<header
				className="pointer-events-none relative z-40 flex flex-col mx-auto"
				style={{ height: "var(--header-height)", marginBottom: "var(--header-mb)" }}
			>
				<div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
				<div className="sm:px-8 top-0 order-last -mb-3 pt-3 sticky">
					<div className="mx-auto max-w-7xl lg:px-8">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="top-[var(--avatar-top,theme(spacing.3))] w-full sticky" /* ?? */>
									<div className="relative">
										<div className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur  "></div>
										<button
											aria-label="Home"
											style={{ transform: "var(--avatar-image-transform)" }}
											onClick={() => selectActive(pages[0])}
											className={"block h-16 w-16 origin-left pointer-events-auto will-change-transform"}
										>
											<Image
												sizes="4rem"
												src="/images/headshot.JPG"
												width={"256px"}
												height={"256px"}
												alt="Profile picture"
												className="rounded-full bg-zinc-100 object-cover  h-16 w-16"
											/>
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
									<div className="relative gap-4">
										<div className="flex flex-1"></div>
										<div className="flex flex-0 justify-end md:justify-center">
											<MobileDropdown pages={pages} selectActive={selectActive} />
											<nav className="pointer-events-auto hidden md:block">
												<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur   ">
													<TopBarComponents pages={pages} selectActive={selectActive} />
												</ul>
											</nav>
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
