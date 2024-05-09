import { Link } from "react-router-dom";
import ProfileImg from "../img/Profile.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import IconJavaScript from "../img/skill-icons/javascript-colored.svg";
import IconPython from "../img/skill-icons/python-colored.svg";
import IconHTML5 from "../img/skill-icons/html5-colored.svg";
import IconCSS3 from "../img/skill-icons/css3-colored.svg";
import IconReact from "../img/skill-icons/react-colored.svg";
import IconSass from "../img/skill-icons/sass-colored.svg";
import IconTailwindCSS from "../img/skill-icons/tailwindcss-colored.svg";
// import IconStyledComponents from "../img/skill-icons/styled-components.svg";
import IconFigma from "../img/skill-icons/figma-colored.svg";
import IconSupabase from "../img/skill-icons/supabase-colored.svg";

function Hero() {
  return (
    <div className="bg-blue-950 px-4">
      <div className="m-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center gap-5 text-center ">
        <img
          className=" mx-auto mb-3  h-40 w-40 rounded-full border-4 object-cover "
          src={ProfileImg}
          alt="Profile image"
        />
        <h2 className="heading-primary-sub ">Hi, I am</h2>
        <h1 className="heading-primary">Sukhontharat Wetthaisong</h1>
        <h2 className="heading-primary-sub">I am a software engineer.</h2>
        <p className="text-base italic text-blue-50">
          &quot;I turn ideas and creativity into life.&quot;
        </p>
        <div className="flex justify-center  gap-2 text-4xl ">
          <Link
            className="cursor-pointer text-blue-50 transition-all hover:text-blue-200"
            to="https://www.linkedin.com/in/sukhontharat-w/"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            className="cursor-pointer text-blue-50 transition-all hover:text-blue-200"
            to="https://github.com/SukhontharatW"
            target="_blank"
          >
            <AiFillGithub />
          </Link>
        </div>
        <div className="mb-3 flex justify-center gap-2">
          <a className="btn-primary text-base " href="#about">
            About Me
          </a>
          <a className="btn-secondary text-base " href="#project">
            Projects
          </a>
        </div>
        <div className="mx-auto flex max-w-max flex-wrap items-center justify-center  gap-8  rounded-xl px-8">
          <p className=" text-base font-bold uppercase text-blue-50">
            Tech Stacks :
          </p>
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconJavaScript}
              alt="IconJavaScript"
            />
          </Link>
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://www.python.org/"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconPython}
              alt="IconJavaScript"
            />
          </Link>
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://react.dev/"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconReact}
              alt="IconJavaScript"
            />
          </Link>
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconHTML5}
              alt="IconJavaScript"
            />
          </Link>
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://www.w3.org/TR/CSS/#css"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconCSS3}
              alt="IconJavaScript"
            />
          </Link>
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://sass-lang.com/"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconSass}
              alt="IconJavaScript"
            />
          </Link>
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://tailwindcss.com/"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconTailwindCSS}
              alt="IconJavaScript"
            />
          </Link>
          {/* <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://styled-components.com/"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconStyledComponents}
              alt="IconJavaScript"
            />
          </Link> */}
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://supabase.com/"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconSupabase}
              alt="IconJavaScript"
            />
          </Link>
          <Link
            className="cursor-pointer text-blue-50 hover:text-blue-200"
            to="https://www.figma.com/"
            target="_blank"
          >
            <img
              className="h-8 hover:translate-y-1 hover:transition-all"
              src={IconFigma}
              alt="IconJavaScript"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
