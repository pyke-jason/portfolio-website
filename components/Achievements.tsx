import PageProps from "interfaces/PageProps";
import BulletedNotes, { BulletedNote } from "./BulletedNotes";
import SectionEntry from "./SectionEntry";
import TitledSection from "./TitledSection";

export default function Achievements({ data, onBecameActive }: PageProps) {
    return <>
        <TitledSection data={data} onBecameActive={onBecameActive} title="Achievements">
            <SectionEntry title="Eagle Scout" subtitle="Boy Scouts of America" date="2017" />
            <SectionEntry title="Student Athlete" subtitle="University of Washington" date="Sep. 2018 &ndash; Sep. 2020">
                <BulletedNote note={"Rowing athlete at National Championship D1 program."} />
            </SectionEntry>
            <SectionEntry title="9x Dean's List Award Recipient" subtitle="University of Washington" date="2018 &ndash; 2022" />
        </TitledSection>

    </>
}