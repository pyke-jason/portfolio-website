import PageData from "interfaces/PageData";
import Section from "./Section";
import SectionEntry from "./SectionEntry";
import SectionEntryNotes from "./SectionEntryNotes";

export default function Experience({ id }: PageData) {
    return <>
        <Section id={id} title="Experience">
            <SectionEntry
                title="Software Engineer, Intern"
                subtitle="Booz Allen Hamilton"
                date="July 2022 - Present"
            >
                <SectionEntryNotes
                    notes={["Implemented a multiplayer authoritative game server for a mixed reality wargaming application",
                        "Improved framerate on HoloLens by 63% through computation offloading and algorithm optimization as well as implementing an object pooling system and reducing memory allocations",
                        "Reduced network traffic by 37% by implementing allocation-free message encoding/decoding",
                        "Leveraged knowledge in client/server architecture, UDP/TCP and Transport Layer Security, programmed in C# using Visual Studio, and debugged using Visual Studio, Unity Profiler, and HoloLens debug interface"
                    ]} />
            </SectionEntry>
            <SectionEntry
                title="Software Developer and Student Researcher"
                subtitle="Seattle Children's"
                date="January 2021 - June 2022"
            >
                <SectionEntryNotes
                    notes={[
                        "Integrated Human Pose Estimation into an automated image screening algorithm for arthritis with 95.5% accuracy to the technician assisted method by utilizing Human Pose Estimation and contouring",
                        "Implemented mobile photo capture and upload pages for REST API using Flutter",
                        "Established remote testing and development in container on HPC system using Docker and bash scripts ",
                        "Leveraged knowledge in Mobile Application Development and Computer Vision, programmed using Python and Dart, and debugged using Visual Studio Code"
                    ]} />
            </SectionEntry>
        </Section>
    </>
}