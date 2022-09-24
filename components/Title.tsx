import PageData from "interfaces/PageData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "./Section";
import { UrlObject } from "url";
import ContactDropdown from "./ContactDropdown";
import IconLink from "./IconLink";

interface StyledLinkData {
  href: string;
  className?: string;
  children?: React.ReactNode;
}
function StyledLink({ href, children, className }: StyledLinkData) {
  return (
    <div className={className}>
      <Link href={href}>
        <a
          target="_blank"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          {children}
        </a>
      </Link>
    </div>
  );
}

function Title({ id, onBecameActive }: PageData) {
  return (
    <>
      <Section className="p-12 border-b md:h-screen flex flex-col" id={id} onBecameActive={onBecameActive}>
        <div className="my-auto text-center md:text-left">
          <div className="md:hidden mb-3">
            <Image
              src="/images/headshot-circle.png"
              width="220px"
              height="220px"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase">
            Jason Pyke
          </h1>
          <h2 className="text-2xl mb-5">Software Engineer</h2>
          <h3 className="mb-5">Seattle, WA - pyke.jason1@gmail.com</h3>
          <p className="mb-12">
            Passionate software developer who enjoys solving problems and
            building applications!
          </p>
          <StyledLink href="/resume.pdf" className="mb-12">
            Resume (PDF)
          </StyledLink>
          <div className="flex items-center">
            <IconLink
              circular
              className="text-5xl"
              href="https://www.linkedin.com/in/jason-pyke/"
              name={{ prefix: "fab", iconName: "linkedin" }}
            />
            <IconLink
              circular
              className="text-5xl"
              href="https://github.com/pyke-jason"
              name={{ prefix: "fab", iconName: "github" }}
            />
            <IconLink
              circular
              className="text-5xl"
              href="mailto:pyke.jason1@gmail.com"
              name={{ prefix: "fas", iconName: "envelope" }}
            />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Title;
