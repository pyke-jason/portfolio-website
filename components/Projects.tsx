import PageData from "interfaces/PageData";
import Section from "./Section";
import SectionEntry from "./SectionEntry";
import SectionEntryNotes from "./SectionEntryNotes";

export default function Projects({ id }: PageData) {
    return <>
        <Section id={id} title="Projects">
            <SectionEntry
                title="Coalition - Multiplayer FPS"
                subtitle="Mobile Game"
                date="July 2014 - June 2021"
            >
                <SectionEntryNotes
                    notes={[
                        "Created a real-time multiplayer video game using a client authoritative model with over 4 million downloads",
                        "Created REST API for dynamic content delivery to clients",
                        "Utilized: C#, JavaScript, Node.js, Unity, Local Persistent Data, Cloud Storage, Caching, Json.NET"
                    ]} />
            </SectionEntry>
            <SectionEntry
                title="Rampage Road"
                subtitle="Mobile Game"
                date="December 2016 - Present"
            >
                <SectionEntryNotes
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
                date="December 2016 - Present"
            >
                <SectionEntryNotes
                    notes={[
                        "Developed an interactive resume tailoring tool using TypeScript for screening job listings",
                        "Established REST API for storing and fetching results, incorporated document-based persistent storage ",
                        "Utilized: Next.js, TypeScript, MongoDB"
                    ]} />
            </SectionEntry>
            <SectionEntry
                title="Flights Database Design & Implementation"
                subtitle="Mobile Game"
                githubUrl="https://github.com/pyke-jason/sql-flights"
                date="December 2016 - Present"
            >
                <SectionEntryNotes
                    notes={[
                        "Developed and populated a database for an airline's flights database using stored and insert procedures, business rules, synthetic transactions, and complex queries ",
                        "Utilized: SQL, MS SQL Server 2019"
                    ]} />
            </SectionEntry>
        </Section>
    </>
}