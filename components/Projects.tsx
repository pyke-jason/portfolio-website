import PageProps from "interfaces/PageProps";
import TitledSection from "./TitledSection";
import SectionEntry from "./SectionEntry";
import BulletedNotes from "./BulletedNotes";

export default function Projects({ data }: PageProps) {
    return <>
        <TitledSection data={data} title="Projects">
            <SectionEntry
                title="Coalition &ndash; Multiplayer FPS"
                subtitle="Mobile Game"
                date="July 2014 &ndash; June 2021"
                googlePlay="https://play.google.com/store/apps/details?id=com.sideeffect.coalition"
                genericLink="http://linebylinestudios.com/"
            >
                <BulletedNotes
                    notes={[
                        "Created a real-time multiplayer video game using a client authoritative networking model with over 4 million downloads",
                        "Designed a REST API for dynamic content delivery to clients",
                        "Utilized: C#, JavaScript, Node.js, Unity, Local Persistent Data, Cloud Storage, Caching, Json.NET"
                    ]} />
            </SectionEntry>
            <SectionEntry
                title="Rampage Road"
                subtitle="Mobile Game"
                date="December 2016 &ndash; Present"
                googlePlay="https://play.google.com/store/apps/details?id=com.linebyline.rampageroad"
                genericLink="http://linebylinestudios.com/"
            >
                <BulletedNotes
                    notes={[
                        "Designed and implemented a revenue generating open-world Android game with over 7 million downloads",
                        "Implemented efficient multithreaded A* pathfinding algorithm using Unity C# Jobs System",
                        "Utilized: C#, Unity, Local Persistent Data, Cloud Storage, Json.NET"
                    ]} />
            </SectionEntry>
            <SectionEntry
                title="Resume Quest"
                subtitle="Informatics Capstone Project"
                genericLink="https://resumequest.careers"
                githubUrl="https://github.com/Pomegranate-Coding-Group/CritiqueAI"
                date="December 2016 &ndash; Present"
            >
                <BulletedNotes
                    notes={[
                        "Developed an interactive resume tailoring tool using TypeScript for screening job listings",
                        "Established REST API for storing and fetching results, incorporated document-based persistent storage ",
                        "Utilized: Next.js, TypeScript, MongoDB"
                    ]} />
            </SectionEntry>
            <SectionEntry
                title="Flights Database Design & Implementation"
                subtitle="Informatics School Project"
                githubUrl="https://github.com/pyke-jason/sql-flights"
                date="December 2016 &ndash; Present"
            >
                <BulletedNotes
                    notes={[
                        "Developed and populated a database for an airline's flights database using stored and insert procedures, business rules, synthetic transactions, and complex queries",
                        "Utilized: SQL, MS SQL Server 2019"
                    ]} />
            </SectionEntry>
            <SectionEntry
                title="Memory Manager"
                subtitle="CS School Project"
                githubUrl="https://github.com/pyke-jason/memory-manager"
                date="June 2022"
            >
                <BulletedNotes
                    notes={[
                        "Implemented a memory manager library in C using a memory block linked-list and headers",
                        "Utilized: C, CMake, git"
                    ]} />
            </SectionEntry>
        </TitledSection>
    </>
}