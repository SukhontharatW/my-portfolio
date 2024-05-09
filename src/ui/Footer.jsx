import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-blue-950 px-4 py-24" id="contact">
      <div className="m-auto flex max-w-screen-xl flex-col gap-10">
        <div className="">
          <h3 className="heading-secondary-bright">Contact</h3>
          <div className=" flex flex-col text-blue-50 md:flex-row">
            <div className=" flex flex-col gap-2 rounded-md py-5 pr-10 ">
              <FaLinkedin className="text-4xl" />
              <h5 className="text-xl font-semibold">LinkedIn</h5>
              <Link
                className="paragraph-base-bright cursor-pointer transition-all  hover:text-blue-300"
                to="https://www.linkedin.com/in/sukhontharat-w/"
                target="_blank"
              >
                linkedin.com/in/sukhontharat-w
              </Link>
            </div>
            <div className=" flex flex-col gap-2 rounded-md py-5 pr-10 ">
              <MdEmail className="text-4xl" />
              <h5 className="text-xl font-semibold">Email</h5>
              <p className="paragraph-base-bright ">
                sukhontharat.contact@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" my-2 bg-blue-50 pt-0.5"></div>
          <div className="flex flex-col items-start justify-between md:flex-row">
            <a
              className="paragraph-base-bright cursor-pointer  font-semibold uppercase "
              href="#"
            >
              sukhontharat
            </a>
            <p className="paragraph-small-bright">
              Copyright&copy;2024 Sukhontharat W. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
