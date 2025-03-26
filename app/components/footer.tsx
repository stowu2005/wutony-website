

export default function Footer() {
  return (
    <footer className="text-sm mb-16 text-neutral-400">
      <p className="flex justify-center mt-8 dark:text-neutral-600">
        Last Updated March 2025
      </p>
      <p className="flex justify-center dark:text-neutral-600">
        <a className="transition-all hover:text-neutral-300 dark:hover:text-neutral-400
          hover:underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://vercel.com/templates/next.js/nextjs-portfolio">
          Made using Next.js Portfolio with Blog template</a>
      </p>
      <p className="flex justify-center dark:text-neutral-600">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
