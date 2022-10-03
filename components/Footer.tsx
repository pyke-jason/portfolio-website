import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconWithLink from "./IconWithLink";

export default function Footer() {
	return (
		<>
			<section>
				<div className={`sm:px-8 py-32`}>
					<div className="mx-auto max-w-7xl lg:px-8 ">
						<div className="relative px-4 sm:px-8 lg:px-12 border-t pt-32">
							<div className="mx-auto max-w-2xl lg:max-w-5xl space-y-12 text-zinc-600">
								<p className="pb-16">Made by Jason Pyke using TypeScript, Next.js and Tailwind CSS.</p>
								<p className="italic">Created on September 22, 2022</p>
								<IconWithLink href="https://github.com/pyke-jason/portfolio-website">
									<FontAwesomeIcon icon={faGithub} className={"mr-1"} />
									<span>Source Code</span>
								</IconWithLink>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
