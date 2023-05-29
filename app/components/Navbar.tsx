import { createLogo } from "~/utils";

export default function Navbar() {
  return (
    <header className='container flex items-center justify-between h-[80px] sm:h-[123px]'>
      <a
        className='text-2xl dark:text-light font-semibold dark:font-semibold font-outfit'
        href='/'
      >
        {createLogo("H B")}.
      </a>
      <nav>
        <ul className='flex items-center'>
          <li>
            <a className='p-4 dark:text-light block text-lg' href='/projects'>
              Projects
            </a>
          </li>
          <li>
            <a className='p-4 dark:text-light block text-lg' href='/contact'>
              Contact
            </a>
          </li>
          <li>
            <button
              aria-label='theme-button'
              id='theme-button'
              className='dark:text-light rounded-lg p-4 ml-2 bg-slate-100 dark:bg-[#202020]'
            ></button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
