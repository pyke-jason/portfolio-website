import { PageData } from "./PageData";

export default interface PageProps {
    data: PageData;
    className?: string;
    onBecameActive: (id: PageData) => void;
}