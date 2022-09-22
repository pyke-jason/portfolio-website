import PageData from "interfaces/PageData";
import Section from "./Section";
import SectionEntry from "./SectionEntry";

export default function Education({ id }: PageData) {
    return <>
        <Section id={id} title="Education">
            <SectionEntry title="University of Washington - Seattle" subtitle="Bachelor of Science Informatics" date="Sep. 2018 - Dec. 2022">
                <p>Focus Area: Software Development (in-major GPA: 3.91)</p>
                <div className="flex flex-col md:flex-row md:mb-4">
                    <h4 className="flex-none mr-4">Programming Coursework:</h4>
                    <p className="grow-0">Data Structures & Algorithms, Systems Programming, Computer Vision & Artificial Intelligence, Machine Learning</p>
                </div>
                <div className="flex flex-col md:flex-row md:mb-4">
                    <h4 className="flex-none mr-4">Informatics Coursework:</h4>
                    <p className="flex-auto">Full-Stack Web Development, Software Architecture, Mobile Application Development, Database Design & Management, Design Methods, Ethics & Policy</p>
                </div>
            </SectionEntry>
        </Section>
    </>
}