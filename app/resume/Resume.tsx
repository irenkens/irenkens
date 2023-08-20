import React from "react";
import Image from 'next/image';
import {
  BlockItem,
  InfoItem,
  TechItem,
  ExperienceItem,
  HobbyItem,
  SubCompany,
} from "./components";

const Resume = () => {
  return (
    <div className="flex mt-6 mb-12 w-full text-sm leading-4 min-w-[23cm] leading-[18.5px]">
      <div className="bg-white block m-auto mb-[0.5cm] w-[22cm] h-[29.7cm]">
        <div className="flex flex-col mx-[1cm] my-[0.9cm]">
          <div className="top" style={{ display: "flex", marginBottom: "0.5cm" }}>
            <div className="left-side font-header flex flex-col w-[5.25cm] mr-[0.75cm] font-black justify-center items-center text-2xl">
              IRENE RENKENS
            </div>
            <div className="flex flex-1 text-justify">
              Software engineer. Happiest in a dynamic environment where I can continue to learn new things.
              Preference for working full stack as it allows me the opportunity to work with a combination of different
              techniques and tackle a wide variety of challenges. I&apos;m a quick study who is eager to learn, a good team
              player, and always up for a challenge.
            </div>
          </div>
  
          <div className="bottom" style={{ display: "flex" }}>
            <div className="flex flex-col w-[5.25cm] mr-[0.75cm] [&>*]:flex [&>*]:flex-col [&>*:not(:first-child)]:mt-[30px]">
              <BlockItem title="Contact">
                <InfoItem info="private@private.com">
                  <Image priority src="/icons/email.svg" width={18} height={18} alt="Email" className="mx-px" />
                </InfoItem>
                <InfoItem info="+31(0)612345678">
                  <Image priority src="/icons/telephone.svg" width={19} height={19} alt="Phone" className="ml-px -mt-0.75" />
                </InfoItem>
                <InfoItem info="in/irenerenkens" link="https://www.linkedin.com/in/irenerenkens">
                  <Image priority src="/icons/linkedin.svg" width={16} height={16} alt="Linkedin" className="ml-[3px] mr-px -mt-1" />
                </InfoItem>
              </BlockItem>
  
              <BlockItem title="Education">
                <span>MSc Computer Science</span>
                <span>Delft University of Technology</span>
                <span style={{ display: "flex" }}>
                  <span style={{ fontSize: 12 }}>2012 - 2015</span>
                </span>
                <br />
                <span>BSc Computer Science</span>
                <span>Delft University of Technology</span>
                <span style={{ display: "flex" }}>
                  <span style={{ fontSize: 12 }}>2008 - 2012</span>
                </span>
              </BlockItem>
  
              <BlockItem title="Favorite tech">
                <div className="flex flex-row">
                  <div className="flex flex-col flex-[0.85]">
                    <TechItem name="React">
                      <Image priority src="/icons/react.svg" width={25} height={25} alt="React" />
                    </TechItem>
                    <TechItem name="NextJS">
                      <Image priority src="/icons/nextjs-icon.svg" width={25} height={25} alt="NextJS" />
                    </TechItem>
                  </div>
                  <div className="flex flex-col">
                    <TechItem name="NodeJS">
                      <Image priority src="/icons/node-dot-js.svg" width={25} height={25} alt="NodeJS" />
                    </TechItem>
                    <TechItem name="Git">
                      <Image priority src="/icons/git.svg" width={25} height={25} alt="Git"  />
                    </TechItem>
                  </div>
                </div>
              </BlockItem>
  
              <BlockItem title="Worked with">
                <span style={{ textAlign: "justify" }}>
                  JavaScript, TypeScript, Go, C#, Java/Kotlin, Spring Boot, Cypress, Jest, Enzyme, JIRA, ESLint, Sass,
                  VeraCode, GraphQL, Webpack, Express, SonarQube, Electron, Confluence.
                </span>
              </BlockItem>
  
              <BlockItem title="Languages">
                <span>Dutch, English</span>
              </BlockItem>
  
              <BlockItem title="Hobbies">
                <div className="flex flex-row">
                  <div
                    className="col-1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 0.85,
                    }}
                  >
                    <HobbyItem name="Travel">
                      <Image priority src="/icons/globe.svg" width={20} height={20} alt="Travel" />
                    </HobbyItem>
                    <HobbyItem name="Piano">
                      <Image priority src="/icons/piano.svg" width={20} height={20} alt="Piano" />
                    </HobbyItem>
                  </div>
                  <div className="flex flex-col">
                    <HobbyItem name="Photography">
                      <Image priority src="/icons/camera.svg" width={22} height={22} alt="Photography" className="-mr-[1px] -ml-[1px]" />
                    </HobbyItem>
                    <HobbyItem name="Festivals">
                      <Image priority src="/icons/music.svg" width={20} height={20} alt="Festivals" />
                    </HobbyItem>
                  </div>
                </div>
              </BlockItem>
            </div>
  
            <div className="flex flex-col flex-1">
              <BlockItem title="Experience">
                <ExperienceItem
                  title="Software Engineer, Passionate People"
                  date="Mar 2020 - current"
                >
                  Currently working as a consultant for Passionate People, a
                  consultancy focused on leading and developing world-class web
                  applications. Worked at two clients over the past few years:
                  <SubCompany
                    company="Bol.com"
                    description="Working in two teams within IT Security. Focusing on all things front-end
                    related to user login within one team. This includes implementing brand new login screens
                    which are currently going through the testing phase before being rolled out to all 13M+
                    active Bol.com customers. Concurrently working on front-end screens related to two factor
                    authentication which will be rolled out as a new feature to all Bol.com customers in the
                    near future. Next to that also responsible for migrating internal legacy apps from Vaadin
                    to React/Kotlin and creating new ones to easily facilitate support operations.
                    <br />
                    Within the other team I'm working as a fullstack engineer on dashboarding and visualisations
                    to gain valuable insights related to IT Security & Compliance processes.
                    Tech used: Next.js, React, Spring Boot, Kotlin, Angular"
                    style={{ marginTop: 10, marginBottom: 0 }}
                    />
                  <SubCompany
                    company="PwC Netherlands"
                    description="Worked as a fullstack software engineer for PwC on On Demand, which
                    is a platform for editing, analyzing, and visualizing tax data analysis solutions. My responsibilities
                    include clarifying specifications, development and documentation of new features, doing bug fixes, code
                    reviews, and pull request approvals. I improved and maintain code quality by introducing best practices
                    and making sure code is sufficiently covered by tests. I also put quality tools such as code linters,
                    formatters, and pre-commit hooks in place. Tech stack used: React, NodeJS, Go, Kubernetes."
                    style={{ marginTop: 10, marginBottom: 0 }}
                  />
                </ExperienceItem>
                <div className="mb-[20px]" />
                <ExperienceItem
                  title="Software Engineer, ALTEN Nederland"
                  date="Apr 2016 - Feb 2020"
                >
                  I worked for the ALTEN Technology business unit, which focuses
                  specifically on technical software and mechatronics & robotics.
                  Through ALTEN I&apos;ve had the opportunity to work at various
                  companies, including:
                  <SubCompany
                    company="Honeywell"
                    description="Worked as a fullstack software engineer on ENTIS, a tank inventory system. I was responsible
                    for the entire front-end (React, GraphQL, NodeJS), including unit testing, linting, static code analysis and
                    deployment approaches. In addition I was also responsible for doing code reviews/pull request approvals for
                    the back-end team (C#)."
                    style={{ marginTop: 10 }}
                  />
                  <SubCompany
                    company="Veth Propulsion"
                    description="Short assignment during which I developed a Windows desktop application in C#/WPF to support
                    database manipulations."
                  />
                  <SubCompany
                    company="Pointlogic"
                    description="Worked on Nielsen Media Impact (NMI), a software solution to easily access media data and use
                    the data for target analysis and cross-media planning. I was responsible for new crosstable functionality and
                    their integration, new display options for graphs and making existing code more generic. Development was in C#/WPF."
                  />
                  <SubCompany
                    company="Kverneland"
                    description="Worked on a remote diagnostics tool for tractor implements. Responsible for live data tracing
                    of selected I/O components, implementing a license client, and extracting generic functionalities to libraries.
                    The tool was predominantly written in C#/WPF."
                    style={{ marginBottom: 0 }}
                  />
                </ExperienceItem>
                <div className="mb-[20px]" />
                <ExperienceItem
                  title="Platform Consultant, Plat4mation"
                  date="Oct 2015 - Mar 2016"
                >
                  Together with a small team, I implemented a ServiceNow solution
                  for Fujitsu France to support their internal processes.
                </ExperienceItem>
              </BlockItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Resume;
