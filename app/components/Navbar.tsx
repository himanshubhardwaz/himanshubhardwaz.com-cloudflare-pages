import { createLogo } from "~/utils";

export default function Navbar() {
  return (
    <header className="container flex items-center justify-between h-[80px] sm:h-[123px]">
      <a
        className="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit"
        href="/"
      >
        {createLogo("H B")}.
      </a>
      <nav>
        <ul className="flex items-center">
          <li>
            <a className="p-4 dark:text-light block text-lg" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="p-4 dark:text-light block text-lg" href="/blog">
              Blogs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
