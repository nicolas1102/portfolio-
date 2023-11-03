"use client";
import { useCntxt } from "@context";

export default function ThemeSwitcher({}) {
  const { theme, setTheme } = useCntxt();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#111621"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#111621"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <div>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="transition duration-300 fixed z-10 p-2 right-6 top-6 bg-primary-300 dark:bg-primary-200 rounded-md border-2 border-secondary-400 dark:border-white hover:bg-primary-200 active:bg-primary-200 dark:hover:bg-primary-300 dark:active:bg-primary-300"
      >
        {theme === "dark" ? sun : moon}
      </button>
    </div>
  );
}
