import PageProps from "interfaces/PageProps";
import SectionEntry from "./SectionEntry";
import BulletedNotes from "./BulletedNotes";
import TitledSection from "./TitledSection";

export default function Experience({ data, onBecameActive }: PageProps) {
    return <>
        <TitledSection onBecameActive={onBecameActive} data={data} title="Experience">
            <SectionEntry
                title="Software Engineer, Intern"
                subtitle="Booz Allen Hamilton"
                date="July 2022 &ndash; Present"
            >
                <BulletedNotes
                    notes={["Designed authoritative multiplayer game server architecture for a mixed reality wargaming application with TLS handshake and reliable packet sequencing",
                        "Improved framerate on HoloLens by 63% through computation offloading and algorithm optimization as well as implementing an object pooling system and reducing memory allocations",
                        "Reduced network traffic by 37% by implementing allocation-free message encoding/decoding",
                        "Leveraged knowledge in client/server architecture, UDP/TCP and Transport Layer Security, programmed in C# using Visual Studio, and debugged using Visual Studio, Unity Profiler, and HoloLens debug interface"
                    ]} />
            </SectionEntry>
            <SectionEntry
                title="Software Developer and Student Researcher"
                subtitle="Seattle Children's"
                date="January 2021 &ndash; June 2022"
            >
                <BulletedNotes
                    notes={[
                        " Created and validated a patent-pending automated image screening algorithm for arthritis with 95.5% accuracy to a technician assisted method using OpenCV and Human Pose Estimation",
                        "Established remote testing and development in HPC system using Docker and bash scripts",
                        "Implemented mobile photo capture and upload pages for REST API using Flutter",
                        "Leveraged knowledge in Mobile Application Development and Computer Vision, programmed using Python and Dart, and debugged using Visual Studio Code"
                    ]} />
            </SectionEntry>
        </TitledSection>
    </>
}