"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Vue js</li>
        <li>Nuxt</li>
        <li>PostgreSQL</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Selenium</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Keystone School of Engineering, Pune</li>
      </ul>
    ),
  },
  {
    title: "Published Papers",
    id: "papers",
    content: (
      <ul className="list-disc pl-2">
        <li className="hover:border-2 border-purple-500">
          <a href="https://www.irjet.net/volume11-issue03">IRJET "SmartPrep"</a>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="hover:border-2 border-purple-500 ">
          <a href="https://www.coursera.org/account/accomplishments/certificate/TV7KXRCZA69E">
            Google certified coursera Python Certificate
          </a>
        </li>
        <li className="hover:border-2 border-purple-500">
          <a href="https://www.hackerrank.com/certificates/8f241564ecb5">
            HackerRank Certificate Python
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1YxT0cIH9SOXRkxJxmpUPdXB0NUxAB3HN/view?usp=sharing">
            Web developerIntern By Oasis Infobyte
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a frontend developer, I&apos;m dedicated to crafting seamless
            user experiences that captivate and engage. With expertise in Vue.js
            and Python, complemented by proficiency in HTML, CSS, JavaScript,
            and more, I&apos;m adept at tackling a wide range of projects.
            Let&apos;s collaborate and turn ideas into reality!
          </p>
          <div className="flex flex-row justify-start mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("papers")}
              active={tab === "papers"}
            >
              {" "}
              Published Papers{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
