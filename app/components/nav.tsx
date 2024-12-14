'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
}


export function Navbar() {
  const pathname = usePathname();
  return (
    <aside className="mb-10 tracking-tight mt-4 text-xl">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto md:relative justify-center" 
          id="nav"
        >
          <div className="flex flex-row space-x-10 text-neutral-800 dark:text-neutral-300">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx("transition-all hover:text-neutral-950 hover:font-bold dark:hover:text-neutral-200 flex align-middle relative py-1"
                  ,{'underline underline-offset-6': pathname === path,},)}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
    
  )
}
