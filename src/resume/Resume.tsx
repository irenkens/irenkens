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

// source: https://simpleicons.org/
import { ReactComponent as NodeJS } from "./icons/node-dot-js.svg";
import { ReactComponent as Git } from "./icons/git.svg";
import { ReactComponent as ReactIcon } from "./icons/react.svg";
import { ReactComponent as Go } from "./icons/go.svg";
import { ReactComponent as Kubernetes } from "./icons/kubernetes.svg";

// source: https://www.flaticon.com/
import  { ReactComponent as Email } from "./icons/email.svg";
import  { ReactComponent as Phone } from "./icons/telephone.svg";
import  { ReactComponent as LinkedIn } from "./icons/linkedin.svg";
import  { ReactComponent as Globe } from "./icons/globe.svg";
import  { ReactComponent as Piano } from "./icons/piano.svg";
import  { ReactComponent as Music } from "./icons/music.svg";
import  { ReactComponent as Camera } from "./icons/camera.svg";

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
              <InfoItem info="private@example.com"><Email width="18px" style={{ marginLeft: 1, marginRight: 1 }} /></InfoItem>
              <InfoItem info="+31(0)612345678"><Phone width="19px" style={{ marginLeft: 1, marginTop: -3 }} /></InfoItem>
              <InfoItem info="in/irenerenkens"><LinkedIn width="16px" style={{ marginLeft: 3, marginRight: 1, marginTop: -4 }} /></InfoItem>             
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
                  <TechItem name="React"><ReactIcon fill="#61DAFB" width="25px" /></TechItem>
                  <TechItem name="GoLang"><Go fill="#00A29C" width="25px" /></TechItem>
                  <TechItem name="Kubernetes"><Kubernetes fill="#326CE5" width="25px" /></TechItem>
                </div>
                <div
                  className="col-2"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <TechItem name="NodeJS"><NodeJS fill="#339933" width="25px" /></TechItem>
                  <TechItem name="Git"><Git fill="#F05032" width="25px" /></TechItem>
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
                  <HobbyItem name="Travel"><Globe width="20px" /></HobbyItem>
                  <HobbyItem name="Piano"><Piano width="20px" /></HobbyItem>
                </div>
                <div
                  className="col-2"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <HobbyItem name="Photography"><Camera width="22px" style={{ marginLeft: -1, marginRight: -1 }}/></HobbyItem>
                  <HobbyItem name="Festivals"><Music width="20px" /></HobbyItem>
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
