import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


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
    return (<header><h1 className="m-0 text-8xl font-bold">
    <a
    href={'/'}
    className="transition-all hover:text-neutral-300 hover:font-bold dark:hover:text-neutral-500"
    >
    Tony Wu
    </a>
  </h1>
  <ul className=" font-sm ml-12 mt-1 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
    <li>
      <a
        className="flex items-center transition-all hover:text-neutral-300 dark:hover:text-neutral-500"
        rel="noopener noreferrer"
        target="_blank"
        href="/Tony_Wu_Resume.pdf"
        download
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
        href="https://linkedin.com"
      >
        <FaLinkedin transform="translate(0 -1.5)" size={14}/>
        <p className="ml-2 h-7">LinkedIn</p>
      </a>
    </li>
  </ul></header>)
}