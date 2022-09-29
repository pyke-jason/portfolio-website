import PageProps from "interfaces/PageProps";
import SectionEntry from "./SectionEntry";
import BulletedNotes from "./BulletedNotes";
import TitledSection from "./TitledSection";

export default function Experience({ data, onBecameActive }: PageProps) {
	return (
		<>
			<TitledSection onBecameActive={onBecameActive} data={data} title="Experience">
				<SectionEntry title="Software Engineer, Intern" subtitle="Booz Allen Hamilton" date="July 2022 &ndash; Present">
					<BulletedNotes
						notes={[
							"Designed authoritative multiplayer game server architecture for a mixed reality application using .NET core and Unity",
							"Ensured thread safety for User Datagram Protocol (UDP) message reception through message queing and locking",
							"Significantly improved framerate on mixed reality device (Microsoft HoloLens) through computation offloading, algorithm optimization, and object pooling",
							"Leveraged knowledge in client/server architecture, transport protocols (UDP and TCP), concurrency and parallelism, programmed in C# using Visual Studio, and debugged using Visual Studio, Unity Profiler, and HoloLens Mixed Reality Portal",
						]}
					/>
				</SectionEntry>
				<SectionEntry
					title="Software Developer and Student Researcher"
					subtitle="Seattle Children's"
					date="January 2021 &ndash; June 2022"
				>
					<BulletedNotes
						notes={[
							"Created and validated a patent-pending automated image screening algorithm for arthritis with 95.5% accuracy to the technician assisted method using Python, OpenCV, and Human Pose Estimation",
							"Established remote testing and development in HPC system using Docker and bash scripts",
							"Implemented mobile photo capture and upload pages for the REST API using Dart and Flutter",
							"Leveraged knowledge in Mobile Application Development and Computer Vision, programmed using Python and Dart, and debugged using Visual Studio Code",
						]}
					/>
				</SectionEntry>
			</TitledSection>
		</>
	);
}
