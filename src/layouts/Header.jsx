// import { useState } from "react";
// import darkUrl from "../icons/dark.svg";
export default function Header() {
  // console.log(darkUrl);
  return (
    <>
      <header>
        <nav className="header p-12 flex justify-between">
          <ul className="right flex gap-32 text-[20px]">
            <li>نمونه کارها</li>
            <li>درباره من</li>
            <li>پست های مفید</li>
            <li>راه های ارتباطی</li>
          </ul>
          <ul className="left">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}
