export default interface PageData {
    id: string;
    className?: string;
    onBecameActive: (id: string) => void;
}