import PageData from "interfaces/PageData";
import Section from "./Section";

export default function Achievements({ id }: PageData) {
    return <>
        <Section id={id} title="Achievements">
            <ul>
                <li className=" list-disc list-inside">Eagle Scout (2017)</li>
                <li className=" list-disc list-inside">8x Dean's List Award (University of Washington) </li>
            </ul>
        </Section>
    </>
}