import PageData from "interfaces/PageData";
import Image from "next/image";

function Title({ id: url }: PageData) {
    return <>
        <div id={url} className="p-12 border-b md:h-screen flex flex-col">
            <div className="my-auto text-center md:text-left">
                <div className="md:hidden mb-3">
                    <Image src="/images/headshot-circle.png" width="220px" height="220px" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold uppercase">Jason Pyke</h1>
                <h2 className="text-2xl mb-5">Software Engineer</h2>
                <h3 className="mb-5">Seattle, WA - pyke.jason1@gmail.com</h3>
                <p>Passionate software developer who enjoys solving problems and building applications!</p>
            </div>
        </div>
    </>
}

export default Title;