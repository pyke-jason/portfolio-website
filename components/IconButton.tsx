
interface IconButtonData {
    link: string;
    className?: string;
    children?: React.ReactNode;
}

function IconButton({ link, className, children }: IconButtonData) {

    return <a href={link} className={className} >
        {children}
    </a >
}

export default IconButton;