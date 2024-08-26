

export default function Footer() {
  return (
    <footer className="text-sm mb-16">
      <p className="flex justify-center mt-8 text-neutral-400 dark:text-neutral-300">
        Last Updated August 2024
      </p>
      <p className="flex justify-center text-neutral-400 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
