import PageProps from "interfaces/PageProps";
import SectionEntry from "./SectionEntry";
import BulletedNotes from "./BulletedNotes";
import TitledSection from "./TitledSection";
import { BriefcaseIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import DownloadResume from "./DownloadResume";
import { Disclosure } from "@headlessui/react";
import { AcademicCapIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

interface WorkItemProps extends React.HTMLAttributes<HTMLElement> {
	company: string;
	title: string;
	time: JSX.Element;
	src: string;
}

function WorkItem({ company, title, time, src, children, ...rest }: WorkItemProps) {
	return (
		<li {...rest}>
			<Disclosure>
				{({ open }) => (
					<div className="group">
						<Disclosure.Button className="text-left justify-between flex gap-4 items-center w-full p-3 hover:bg-zinc-50 rounded-2xl">
							<div className="flex flex-auto gap-4">
								<div className="relative my-auto flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
									<Image
										alt=""
										src={src}
										width="32"
										height="32"
										decoding="async"
										data-nimg="future"
										className="h-7 w-7 rounded-full"
										loading="lazy"
									/>
								</div>
								<div className="flex flex-col sm:flex-row flex-auto">
									<div className="flex flex-auto">
										<dl className="flex flex-col md:flex-row flex-wrap gap-x-2 space-y-1">
											<dt className="sr-only">Company</dt>
											<dd className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">{company}</dd>
											<dt className="sr-only">Role</dt>
											<dd className="text-sm text-zinc-500 dark:text-zinc-400">{title}</dd>
										</dl>
									</div>
									<div className="my-auto">
										<dt className="sr-only">Date</dt>
										{time}
									</div>
								</div>
							</div>
							<div className="">
								{open ? (
									<MinusIcon className="relative h-5 w-5 text-zinc-500 group-hover:text-zinc-900" />
								) : (
									<PlusIcon className="relative h-5 w-5 text-zinc-500 group-hover:text-zinc-800" />
								)}
							</div>
						</Disclosure.Button>
						<Disclosure.Panel className="p-4 text-sm text-gray-500 max-w-fit">{children}</Disclosure.Panel>
					</div>
				)}
			</Disclosure>
		</li>
	);
}

function BackgroundTable() {
	const iconStyle = "h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500";

	function CellTitle({ title, icon }: any) {
		return (
			<h2 className="flex text-sm font-semibold pt-3 px-3 text-zinc-900 dark:text-zinc-100 border-zinc-800/5">
				{icon}

				<span className="ml-3">{title}</span>
			</h2>
		);
	}
	return (
		<div className="rounded-2xl border border-zinc-100 md:p-3 flex-none xl:max-w-xl">
			<ol className="mt-3 space-y-4">
				<CellTitle title="Education" icon={<AcademicCapIcon className={iconStyle} />} />
				<WorkItem
					company="University of Washington"
					title={"Seattle, WA"}
					time={
						<dd className="sm:text-right w-28 text-xs text-zinc-400 dark:text-zinc-500" aria-label="2018 until 2022">
							<time dateTime="2018">2018</time>
							<span aria-hidden="true"> — </span>
							<time dateTime="2022">2022</time>
						</dd>
					}
					src="/images/uw.jpeg"
				>
					<div className="text-zinc-600 space-y-8">
						<p className="">Focus Area: Software Development (in-major GPA: 3.91, overall 3.67)</p>
						<div className="flex flex-col md:flex-row text-zinc-600">
							<h4 className="italic flex-none mr-4">Programming Coursework:</h4>
							<p className="grow-0">
								Data Structures & Algorithms, Hardware/Software Interface, Computer Vision & Artificial Intelligence,
								Machine Learning
							</p>
						</div>
						<div className="flex flex-col md:flex-row">
							<h4 className="italic flex-none mr-4">Informatics Coursework:</h4>
							<p className="grow0">
								Full-Stack Web Development, Software Architecture, Mobile Application Development, Systems Design, Database
								Design & Management, Design Methods, Ethics & Policy
							</p>
						</div>
					</div>
				</WorkItem>
				<CellTitle title="Work" icon={<BriefcaseIcon className={iconStyle} />} />
				<WorkItem
					company="Booz Allen Hamilton"
					title={"Software Engineer, Intern"}
					className=""
					time={
						<dd className="sm:text-right w-28 text-xs text-zinc-400 dark:text-zinc-500" aria-label="2022 until Present">
							<time dateTime="2022">2022</time>
							<span aria-hidden="true"> — </span>
							<time dateTime="2022">Present</time>
						</dd>
					}
					src="/images/boozallen.jpeg"
				>
					<BulletedNotes
						className="text-zinc-600"
						notes={[
							"Designed authoritative multiplayer game server architecture for a mixed reality application using .NET core and Unity",
							"Ensured thread safety for User Datagram Protocol (UDP) message reception through message queing and locking",
							"Significantly improved framerate on mixed reality device (Microsoft HoloLens) through computation offloading, algorithm optimization, and object pooling",
							"Leveraged knowledge in client/server architecture, transport protocols (UDP and TCP), concurrency and parallelism, programmed in C# using Visual Studio, and debugged using Visual Studio, Unity Profiler, and HoloLens Mixed Reality Portal",
						]}
					/>
				</WorkItem>
				<WorkItem
					company="Seattle Children's"
					title={"Student Researcher, Software Developer"}
					time={
						<dd className="sm:text-right w-28 text-xs text-zinc-400 dark:text-zinc-500" aria-label="2021 until 2022">
							<time dateTime="2021">2021</time>
							<span aria-hidden="true"> — </span>
							<time dateTime="2022">2022</time>
						</dd>
					}
					src="/images/seattlechildrens.jpeg"
				>
					<BulletedNotes
						className="text-zinc-600"
						notes={[
							"Created and validated a patent-pending automated image screening algorithm for arthritis with 95.5% accuracy to the technician assisted method using Python, OpenCV, and Human Pose Estimation",
							"Established remote testing and development in HPC system using Docker and bash scripts",
							"Implemented mobile photo capture and upload pages for the REST API using Dart and Flutter",
							"Leveraged knowledge in Mobile Application Development and Computer Vision, programmed using Python and Dart, and debugged using Visual Studio Code",
						]}
					/>
				</WorkItem>
			</ol>

			<DownloadResume className="w-full p-3" />
		</div>
	);
}

export default function Experience({ data }: PageProps) {
	return (
		<>
			<TitledSection data={data}>
				<div className="flex flex-col xl:flex-row gap-16">
					<div className="flex-auto max-w-2xl">
						<h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
							Born and raised in the greater Seattle area, I started programming when I was 13...
						</h2>
						<p className="relative z-10 mt-8 text-sm text-zinc-600 dark:text-zinc-400">
							... thanks to my burning desire to have my own custom Minecraft plugins. Since then, I've been applying my
							learning and problem solving skills to tackle software development challenges in coursework, projects, and my
							professional career.
						</p>
					</div>
					<BackgroundTable />
				</div>
			</TitledSection>
		</>
	);
}
