
interface IconButtonData {
    link: string;
    className?: string;
    children?: React.ReactNode;
}

function IconButton({ link, className, children }: IconButtonData) {
    function onClick() {
        window.open(link, 'blank');
    }

    return <button onClick={onClick} type="button" className={className} >
        {children}
    </button >
}

export default IconButton;