export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello!
      </h1>
      <p className="mb-4">
        My name is Tony Wu. I am a sophomore at the <a
          className="transition-all text-purple-700 dark:text-purple-500 hover:text-purple-300 dark:hover:text-purple-300
          hover:underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.uw.edu"
        >University of Washington</a> majoring in <a
          className="transition-all text-yellow-700 dark:text-yellow-500 hover:text-yellow-300 dark:hover:text-yellow-200
          hover:underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.cs.washington.edu/"
        >Computer Science</a>.
      </p>
    </section>
  )
}
