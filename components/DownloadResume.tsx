import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function DownloadResume(props: React.LinkHTMLAttributes<HTMLElement>) {
	let { ...rest } = props;

	return (
		<div {...rest}>
			<a
				className="inline-flex group items-center gap-2 w-full justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition bg-zinc-100 font-medium text-zinc-900 hover:bg-zinc-200 active:bg-zinc-100 active:text-zinc-900/60   :bg-zinc-800 :text-zinc-50 :bg-zinc-800/50 :text-zinc-50/70"
				href="/resume.pdf"
				aria-label="Download resume"
			>
				View Resume
				<ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 :stroke-zinc-50 :stroke-zinc-50" />
			</a>
		</div>
	);
}
