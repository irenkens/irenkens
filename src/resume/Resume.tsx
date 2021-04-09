import React from "react";
import {
  BlockItem,
  InfoItem,
  TechItem,
  ExperienceItem,
  HobbyItem,
  SubCompany,
} from "./components";
import "./resume.scss";

import react from "./icons/react.png";
import node from "./icons/node.png";
import go from "./icons/go.png";
import kubernetes from "./icons/kubernetes.png";
import git from "./icons/git.png";

import email from "./icons/email.png";
import phone from "./icons/phone.png";
import linkedin from "./icons/linkedin.png";

import globe from "./icons/globe.png";
import piano from "./icons/piano.png";
import music from "./icons/music.png";
import camera from "./icons/camera5.png";

const Resume = () => (
  <div className="resume-page">
    <div className="page a4">
      <div className="resume-content">
        <div className="top" style={{ display: "flex", marginBottom: "0.5cm" }}>
          <div className="left-side name-box">IRENE RENKENS</div>
          <div
            className="summary"
            style={{
              display: "flex",
              fontSize: 14,
              flex: 1,
              textAlign: "justify",
            }}
          >
            Fullstack software engineer. Happiest in a dynamic environment where
            I can continue to learn new things. Working the full stack excites
            me as it gives me the opportunity to work with a combination of
            different techniques and tackle a wide variety of challenges. Im a
            quick study, eager to learn, a good team player, and always up for a
            challenge.
          </div>
        </div>

        <div className="bottom" style={{ display: "flex" }}>
          <div className="left-side">
            <BlockItem title="Contact">
              <InfoItem icon={email} info="private@example.com" />
              <InfoItem icon={phone} info="+31(0)612345678" />
              <InfoItem icon={linkedin} info="in/irenerenkens" />
              {/* <InfoItem icon={location} info='Den Haag' /> */}
            </BlockItem>

            <BlockItem title="Education">
              <span>MSc Computer Science</span>
              <span>Delft University of Technology</span>
              <span style={{ display: "flex" }}>
                {/* <img src={calendar} alt='img' style={{ height: 15, width: 15 }} /> */}
                <span style={{ fontSize: 12 }}>2012 - 2015</span>
              </span>
              <br />
              <span>BSc Computer Science</span>
              <span>Delft University of Technology</span>
              <span style={{ display: "flex" }}>
                {/* <img src={calendar} alt='img' style={{ height: 15, width: 15 }} /> */}
                <span style={{ fontSize: 12 }}>2008 - 2012</span>
              </span>
            </BlockItem>

            <BlockItem title="Current tech">
              <div className="block-content" style={{ flexDirection: "row" }}>
                <div
                  className="col-1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 0.85,
                  }}
                >
                  <TechItem icon={react} name="React" />
                  <TechItem icon={go} name="GoLang" />
                  <TechItem icon={kubernetes} name="Kubernetes" />
                </div>
                <div
                  className="col-2"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <TechItem icon={node} name="NodeJS" />
                  <TechItem icon={git} name="Git" />
                </div>
              </div>
            </BlockItem>

            <BlockItem title="Other skills">
              <span style={{ textAlign: "justify" }}>
                C#, Microservices, JavaScript, TypeScript, JIRA, ESLint, Sass,
                VeraCode, GraphQL, Webpack, Express, SonarQube, Electron, Scrum,
                Confluence, OOP, Unit testing, SVN, UML, WPF, HTML, CSS, Visual
                Studio (Code).
              </span>
            </BlockItem>

            <BlockItem title="Languages">
              <span>Dutch, English</span>
            </BlockItem>

            <BlockItem title="Hobbies">
              <div className="block-content" style={{ flexDirection: "row" }}>
                <div
                  className="col-1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 0.85,
                  }}
                >
                  <HobbyItem icon={globe} name="Travel" />
                  <HobbyItem icon={piano} name="Piano" />
                </div>
                <div
                  className="col-2"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <HobbyItem icon={camera} name="Photography" />
                  <HobbyItem icon={music} name="Festivals" />
                </div>
              </div>
            </BlockItem>
          </div>

          <div className="right-side">
            <BlockItem title="Experience">
              <ExperienceItem
                title="Software Engineer, Passionate People"
                date="Mar 2020 - current"
              >
                Currently working as a consultant for Passionate People, a
                consultancy focused on leading and developing world-class web
                applications. At the moment I&apos;m working at one of their
                clients:
                <SubCompany
                  company="PwC Netherlands"
                  description="Working as a fullstack software engineer for PwC on Digital Solutions Store (DSS), which
                  is a platform for editing, analyzing, and visualizing tax data analysis solutions. My responsibilities
                  include clarifying specifications, development and documentation of new features, doing bug fixes, code
                  reviews and pull request approvals. I maintain code quality by introducing best practices and making
                  sure code is sufficiently covered by tests. I also put quality tools such as code linters, formatters, and
                  pre-commit hooks in place when needed. Working with Go/React/NodeJS/ Kubernetes/microservices."
                  style={{ marginTop: 10, marginBottom: 0 }}
                />
              </ExperienceItem>
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
                  for the entire front-end (React/GraphQL/ NodeJS), including unit testing, linting, static code analysis and
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

              <ExperienceItem
                title="Platform Consultant, Plat4mation"
                date="Oct 2015 - Mar 2016"
              >
                Together with a small team, I implemented a ServiceNow solution
                for Fujitsu France to support their internal processes.
              </ExperienceItem>

              <ExperienceItem
                title="Intern, M3 Interactive(s) Pte. Ltd. Singapore"
                date="Apr 2011 - Jul 2011"
              >
                Developed mini games based on speech recognition in C#/WPF. The
                goal of the games was to improve the player&apos;s English
                pronounciation.
              </ExperienceItem>
            </BlockItem>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
