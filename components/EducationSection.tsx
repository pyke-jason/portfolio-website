import PageProps from "interfaces/PageProps";
import SectionEntry from "./SectionEntry";
import TitledSection from "./TitledSection";
export default function Education({ data }: PageProps) {
    return <>
        <TitledSection data={data}>
            <SectionEntry className="space-y-6" title="University of Washington &ndash; Seattle" subtitle="Bachelor of Science, Informatics" date="Sep. 2018 &ndash; Dec. 2022">
                <p className="">Focus Area: Software Development (in-major GPA: 3.91, overall 3.67)</p>
                <div className="flex flex-col md:flex-row ">
                    <h4 className="italic flex-none mr-4">Programming Coursework:</h4>
                    <p className="grow-0">Data Structures & Algorithms, Hardware/Software Interface, Computer Vision & Artificial Intelligence, Machine Learning</p>
                </div>
                <div className="flex flex-col md:flex-row">
                    <h4 className="italic flex-none mr-4">Informatics Coursework:</h4>
                    <p className="grow0">Full-Stack Web Development, Software Architecture, Mobile Application Development, Systems Design, Database Design & Management, Design Methods, Ethics & Policy</p>
                </div>
            </SectionEntry>
        </TitledSection>
    </>
}