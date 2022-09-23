export default interface PageData {
    id: string;
    onBecameActive: (id: string) => void;
}