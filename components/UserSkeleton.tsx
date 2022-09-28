import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface UserSkeletonData {
	className?: string;
	iconSize: SizeProp;
}

export default function UserSkeleton({ className, iconSize }: UserSkeletonData) {
	return (
		<div
			className={`${className} animate-pulse bg-slate-100 flex justify-center items-center mx-auto md:hidden rounded-full overflow-hidden`}
		>
			<FontAwesomeIcon className="text-slate-300" size={iconSize} icon={faUser} />
		</div>
	);
}
