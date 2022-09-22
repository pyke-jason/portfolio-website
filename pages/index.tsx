import Content from "@components/Content";
import Nav from "@components/Nav";
import NavBar from "@components/NavBar";

export default function Home() {
  return <>
    {<div className="md:flex">
      {/* <NavBar className="md:flex-none w-80" /> */}
      <Nav />
      <Content className="md:flex-grow" />
    </div>}

  </>
}