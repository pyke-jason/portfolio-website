import Link from "next/link";

export default function IconWithLink({ href, children, ...props }: React.LinkHTMLAttributes<HTMLElement>) {
	return (
		<Link href={href}>
			<a href={href} {...props}>
				{children}
			</a>
		</Link>
	);
}
