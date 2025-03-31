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
        >Computer Science</a>. I am interested in natural language processing, data visualization, and geography.
      </p>
      <p className="mb-4">The classes I took last quarter were <a
        className="transition-all hover:text-neutral-500 dark:hover:text-blue-300 font-bold dark:font-normal dark:hover:underline dark:text-blue-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://courses.cs.washington.edu/courses/cse447/25wi/">
        Natural Language Processing</a>, <a
          className="transition-all hover:text-neutral-500 dark:hover:text-orange-200 font-bold dark:font-normal
      dark:hover:underline dark:text-orange-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://courses.cs.washington.edu/courses/cse451/25wi/">
          Introduction to Operating Systems</a>, and <a
            className="transition-all hover:text-neutral-500 dark:hover:text-emerald-300 font-bold dark:font-normal
      dark:hover:underline dark:text-emerald-600"
            rel="noopener noreferrer"
            target="_blank"
            href="https://courses.cs.washington.edu/courses/cse421/25wi/">
          Introduction to Algorithms
        </a>.</p>
      <p className="mb-8"> Some other classes I have taken include <a
        className="transition-all hover:text-neutral-500 dark:hover:text-orange-200 font-bold dark:font-normal
      dark:hover:underline dark:text-orange-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://courses.cs.washington.edu/courses/cse442/24au/">
        Data Visualization</a>, <a
          className="transition-all hover:text-neutral-500 dark:hover:text-orange-200 font-bold dark:font-normal
      dark:hover:underline dark:text-orange-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://courses.cs.washington.edu/courses/cse446/24au/">
          Machine Learning</a>, <a
          className="transition-all hover:text-neutral-500 dark:hover:text-orange-200 font-bold dark:font-normal
      dark:hover:underline dark:text-orange-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://courses.cs.washington.edu/courses/cse403/24au/">
          Software Engineering</a>, <a
          className="transition-all hover:text-neutral-500 dark:hover:text-orange-200 font-bold dark:font-normal
      dark:hover:underline dark:text-orange-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://courses.cs.washington.edu/courses/cse473/24au/">
          Introduction to Artificial Intelligence</a>, and <a
          className="transition-all hover:text-neutral-500 dark:hover:text-orange-200 font-bold dark:font-normal
      dark:hover:underline dark:text-orange-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://courses.cs.washington.edu/courses/cse333/24su/">
          Systems Programming</a>.
      </p>
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
      <p className="mb-2">To see the source code for this website, click <a
        className="transition-all hover:text-neutral-400 dark:hover:text-neutral-400 text-neutral-800
        dark:text-neutral-50"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/stowu2005/wutony-website">
        <b>here</b>
      </a>.</p>
    </section>
  )
}
