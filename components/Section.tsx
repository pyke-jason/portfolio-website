import PageData from "interfaces/PageData";
import { useEffect, useRef } from "react";

export interface SectionData extends PageData {
  children?: React.ReactNode;
}

function Section({ children, className, id, onBecameActive }: SectionData) {
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const { offsetTop, offsetHeight } = ref.current;
    const offsetBottom = offsetTop + offsetHeight;
    const scrollMid = window.scrollY + window.innerHeight / 2;
    if (scrollMid >= offsetTop && scrollMid <= offsetBottom) {
      onBecameActive(id);
    }
  }

  return (
    <>
      <section id={id} ref={ref}>
        <div className={`${className} max-w-3xl space-y-12`}>{children}</div>
      </section>
    </>
  );
}

export default Section;
