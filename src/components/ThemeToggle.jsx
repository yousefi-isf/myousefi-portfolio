// import { useEffect, useState } from "preact/hooks";
import { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="toggle-dark-mode cursor-pointer" onClick={toggleTheme}>
      {theme == "light" ? (
        <MoonIcon className="size-6 sm:size-5 cursor-pointer" />
      ) : (
        <SunIcon className="size-6 sm:size-5" />
      )}
      {/* <MoonIconSolid /> */}
    </div>
  );
}
