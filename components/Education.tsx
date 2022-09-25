import PageProps from "interfaces/PageProps";
import SectionEntry from "./SectionEntry";
import TitledSection from "./TitledSection";
export default function Education({ data, onBecameActive }: PageProps) {
    return <>
        <TitledSection onBecameActive={onBecameActive} data={data} title="Education">
            <SectionEntry className="space-y-6" title="University of Washington &ndash; Seattle" subtitle="Bachelor of Science, Informatics" date="Sep. 2018 &ndash; Dec. 2022">
                <p className="">Focus Area: Software Development (in-major GPA: 3.91, overall 3.67)</p>
                <div className="flex flex-col md:flex-row ">
                    <h4 className="italic flex-none mr-4">Programming Coursework:</h4>
                    <p className="grow-0">Data Structures & Algorithms, Systems Programming, Computer Vision & Artificial Intelligence, Machine Learning</p>
                </div>
                <div className="italic flex flex-col md:flex-row">
                    <h4 className="flex-none mr-4">Informatics Coursework:</h4>
                    <p className="flex-auto">Full-Stack Web Development, Software Architecture, Mobile Application Development, Database Design & Management, Design Methods, Ethics & Policy</p>
                </div>
            </SectionEntry>
        </TitledSection>
    </>
}