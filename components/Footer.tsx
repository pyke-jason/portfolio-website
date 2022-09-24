

import IconLink from "./IconLink";



export default function Footer() {
    return <>
        <section className="md:ml-72 p-8 md:p-12 border-b">
            <div className="max-w-3xl">
                <p>Made by Jason Pyke using TypeScript, Next.js and Tailwind CSS.</p>
                <p className="italic mb-8">Created on September 22, 2022</p>
                <IconLink noHighlight className="mt-8" name={{ prefix: "fab", iconName: "github" }} href="https://github.com/pyke-jason/portfolio-website" > Source Code</IconLink>
            </div>
        </section>
    </>
}