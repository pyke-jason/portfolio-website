interface IconButtonData {
    link: string;
    children?: React.ReactNode;
}
function IconButton({ link, children }: IconButtonData) {
    return <a target="_blank" rel="noopener noreferrer" href={link}>
        {children}
    </a>
}

export default IconButton;