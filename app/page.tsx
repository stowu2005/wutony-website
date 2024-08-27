import Link from 'next/link'


export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello!
      </h1>
      <p className="mb-4">
        My name is Tony Wu. I am a sophomore at the <a
          className="transition-all text-purple-800 dark:text-purple-400 hover:text-purple-400 dark:hover:text-purple-300
          dark:hover:underline font-bold dark:font-normal"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.uw.edu"
        >University of Washington</a> majoring in <a
          className="transition-all text-yellow-600 dark:text-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-200
          dark:hover:underline dark:font-normal font-bold"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.cs.washington.edu/"
        >Computer Science</a>. I am interested in programming languages, natural language processing, and geography.
      </p>
      <p className="mb-8">Some courses I've taken include <a
      className="transition-all hover:text-neutral-500 dark:hover:text-blue-300 font-bold dark:font-normal dark:hover:underline dark:text-blue-600"
      rel="noopener noreferrer"
      target="_blank"
      href="https://courses.cs.washington.edu/courses/cse332/24su/">
      Data Structures and Parallelism</a>, <a
      className="transition-all hover:text-neutral-500 dark:hover:text-orange-200 font-bold dark:font-normal
      dark:hover:underline dark:text-orange-500"
      rel="noopener noreferrer"
      target="_blank"
      href="https://courses.cs.washington.edu/courses/cse331/24sp/">
      Software Design & Implementation</a>, <a
      className="transition-all hover:text-neutral-500 dark:hover:text-red-300 font-bold dark:font-normal
      dark:hover:underline dark:text-red-500"
      rel="noopener noreferrer"
      target="_blank"
      href="https://courses.cs.washington.edu/courses/cse333/24su/">
      Systems Programming</a>, and <a
      className="transition-all hover:text-neutral-500 dark:hover:text-emerald-300 font-bold dark:font-normal
      dark:hover:underline dark:text-emerald-600"
      rel="noopener noreferrer"
      target="_blank"
      href="https://courses.cs.washington.edu/courses/cse312/24sp/calendar/calendar.html">
      Foundations of Computing II
      </a>.</p>
      <p className="mb-2">To learn more about me, go to the <Link
        className="transition-all hover:text-neutral-400 dark:hover:text-neutral-400 text-neutral-800
        dark:text-neutral-50"
        href="/about">
          <b>about</b>
        </Link> page.</p>
      <p className="mb-2">To look at some of the projects I've made, go to the <Link
        className="transition-all hover:text-neutral-400 dark:hover:text-neutral-400 text-neutral-800
        dark:text-neutral-50"
        href="/projects">
          <b>projects</b>
        </Link> page.</p>
      <p className="mb-16">To read my blog, go to the <Link
        className="transition-all hover:text-neutral-400 dark:hover:text-neutral-400 text-neutral-800 dark:text-neutral-50"
        href="/blog">
          <b>blog</b>
        </Link> page.</p>
    </section>
  )
}
