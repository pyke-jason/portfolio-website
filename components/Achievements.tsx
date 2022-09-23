import PageData from "interfaces/PageData";
import BulletedNotes, { BulletedNote } from "./BulletedNotes";
import Section from "./Section";
import SectionEntry from "./SectionEntry";

export default function Achievements({ id, onBecameActive }: PageData) {
    return <>
        <Section id={id} onBecameActive={onBecameActive} title="Achievements">
            <SectionEntry title="Eagle Scout" subtitle="Boy Scouts of America" date="2017" />
            <SectionEntry title="Student Athlete" subtitle="University of Washington" date="Sep. 2018 &ndash; Sep. 2020">
                <BulletedNote note={"Rowing athlete at National Championship D1 program."} />
            </SectionEntry>
            <SectionEntry title="9x Dean's List Award Recipient" subtitle="University of Washington" date="2018 &ndash; 2022" />
        </Section>

    </>
}