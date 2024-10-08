import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Header() {
    return (<header><h1 className="flex justify-center transition-all m-0 text-8xl font-bold hover:scale-110 delay-150 hover:-translate-y-3 hover:translate-x-1">
    <a
    href={'/'}
    >
    Tony Wu
    </a>
  </h1>
  <ul className="font-sm flex justify-center mt-1 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
    <li>
      <a
        className="flex items-center transition-all hover:text-neutral-300 dark:hover:text-neutral-500"
        rel="noopener noreferrer"
        target="_blank"
        href="/Tony_Wu_Resume.pdf"
      >
        <ArrowIcon />
        <p className="ml-2 h-7">Resume</p>
      </a>
    </li>
    <li>
      <a
        className="flex items-center transition-all hover:text-neutral-300 dark:hover:text-neutral-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/stowu2005"
      >
        <FaGithub transform="translate(0 -1.5)" size={14}/>
        <p className="ml-2 h-7">GitHub</p>
      </a>
    </li>
    <li>
      <a
        className="flex items-center transition-all hover:text-neutral-300 dark:hover:text-neutral-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/tony-w-baab75325/"
      >
        <FaLinkedin transform="translate(0 -1.5)" size={14}/>
        <p className="ml-2 h-7">LinkedIn</p>
      </a>
    </li>
    <li>
      <a
        className="flex items-center transition-all hover:text-neutral-300 dark:hover:text-neutral-500"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:tonywu@uw.edu"
      >
        <MdOutlineEmail transform="translate(0 -1.5)" size={16}/>
        <p className="ml-2 h-7">Contact</p>
      </a>
    </li>
  </ul>
  <hr className="mt-2 border-1 border-neutral-200"></hr>
    </header>
  )
}