import NavBar from "@components/NavBar";
import Section from "@components/Section";
import SectionEntry from "@components/SectionEntry";
import SectionEntryNotes from "@components/SectionEntryNotes";
import SkillEntry from "@components/SkillsEntry";

export default function Home() {
  return <>
    <NavBar />
    <Section title="About">
      <h1>Jason Pyke</h1>
      <h2>Software Engineer</h2>
      <h3>Seattle, WA - pyke.jason1@gmail.com</h3>
      <p>I am a passionate software developer who enjoys solving problems and building software.</p>
    </Section>
    <Section title="Experience">
      <SectionEntry
        title="Software Engineer Intern"
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
    <Section title="Education">

    </Section>
    <Section title="Projects">
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
    <Section title="Skills">
      <SkillEntry title={"Proficient Programming Languages"} skills={
        ["C#", "C", "TypeScript", "JavaScript", "Java", "SQL"]
      } />
      <SkillEntry title={"Familiar Programming Languages"} skills={
        ["C++", "HTML/CSS", "GO", "Dart", "R"]
      } />
    </Section>
    <Section title="Awards">

    </Section>
  </>
}