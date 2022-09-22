import Content from "@components/Content";
import Nav from "@components/Nav";
import Title from "@components/Title";
import Awards from "@components/Awards";
import Education from "@components/Education";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Skills from "@components/Skills";

export default function Home() {
  const pages = [
    { title: "Jason Pyke", url: "about", "component": Title },
    { title: "Experience", url: "experience", "component": Education },
    { title: "Education", url: "education", "component": Experience },
    { title: "Projects", url: "projects", "component": Projects },
    { title: "Skills", url: "skills", "component": Skills },
    { title: "Awards", url: "awards", "component": Awards },
  ];
  return <>
    {<div className="md:flex">
      {/* <NavBar className="md:flex-none w-80" /> */}
      <Nav pages={pages} />
      <Content pages={pages} className="md:flex-grow" />
    </div>}

  </>
}