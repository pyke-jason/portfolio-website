import PageData from "interfaces/PageData";
import { useEffect, useRef } from "react";
import Section, { SectionData } from "./Section";

interface TitledSection extends SectionData {
  title: string;
}

function TitledSection({
  title,
  children,
  id,
  onBecameActive,
}: TitledSection) {
  return (
    <Section className="p-8 md:p-12 border-b" onBecameActive={onBecameActive} id={id}>
      <h1 className="text-xl md:text-3xl text-stone-700 font-medium uppercase">
        {title}
      </h1>
      {children}
    </Section>
  );
}

export default TitledSection;
