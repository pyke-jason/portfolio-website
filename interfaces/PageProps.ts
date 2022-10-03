import { PageData } from "./PageData";

export default interface PageProps extends React.HTMLAttributes<HTMLElement> {
	data: PageData;
}
