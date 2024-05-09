import { FaLaptopCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
// import CVpdf from "../assets/SukhontharatCV.pdf";
import GetCV from "./GetCV";
function About() {
  return (
    <div className=" px-6 pb-20 pt-10" id="about">
      <h3 className=" heading-secondary py-20 text-center">About Me</h3>
      <div className=" mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-3 text-left">
          <div className=" flex items-center gap-4">
            <div className=" rounded-lg bg-blue-300 p-2">
              <GiGears className="text-3xl text-blue-900" />
            </div>
            <h4 className=" heading-tertiary text-left">
              My professional background
            </h4>
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="paragraph-base">
              I worked as a software engineer for 9 years. Seagate Technology,
              one of the largest global manufacturers of HDDs, was my workplace
              where I specialized in software development for hard disk drives
              (HDDs) using Python as the primary programming language. I
              collaborated with cross-functional teams, including Process
              Engineers, Production Engineers, and Reliability Engineers, to
              drive significant improvements in product quality, performance,
              and testing efficiency.
            </p>
            <div>
              <p className="paragraph-base font-bold">
                Key Contributions and Achievements:
              </p>
              <p className="paragraph-base">
                Project Management and Communication,
              </p>
              <p className="paragraph-base">Software Development,</p>
              <p className="paragraph-base">Code Delivery and Verification,</p>
              <p className="paragraph-base">Mass Production Deployment,</p>
              <p className="paragraph-base">
                Problem Solving and Global Collaboration.
              </p>
            </div>
            <GetCV />
            {/* <a
              className="btn-primary text-sm normal-case"
              href={CVpdf}
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </a> */}
          </div>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <div className=" flex items-center gap-4 ">
            <div className=" rounded-lg bg-blue-300 p-2">
              <FaLaptopCode className="text-3xl text-blue-900" />
            </div>
            <h4 className=" heading-tertiary ">My professional development</h4>
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="paragraph-base">
              I found web development is a great opportunity for me to expand my
              skills and I found it as a place where i can turn creativies into
              life.
            </p>
            <p className="paragraph-base">
              <span className=" font-bold">Learning</span> : Over the past 8
              months, I have undertaken intensive study in web development,
              focusing on a wide range of technologies. Here are the key areas I
              have explored: HTML, CSS, JavaScript, Vanilla JavaScript,SASS,
              React, TailwindCSS, Styled-Components, Supabase and Figma.
            </p>
            <div>
              <p className="paragraph-base">
                <span className=" font-bold">Projects</span> : I applied what I
                have learnt to desided and build these following projects.
              </p>
              <p className="paragraph-base">Project 1 : Restaurant Website.</p>
              <p className="paragraph-base">Project 2 : Flower shop Website.</p>
              <p className="paragraph-base">Project 3 : Portfolio website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
