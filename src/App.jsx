import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "system";
  });

  useEffect(() => {
    if (theme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.theme = theme;
    }
  }, [theme]);

  if (
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

  return (
    <div className="bg-white h-screen dark:bg-slate-900 flex items-center justify-center">
      <select
        className="py-2 px-4 rounded-lg border-2 capitalize font-medium outline-none cursor-pointer dark:text-white dark:border-white/40 bg-transparent dark:bg-slate-800"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option
          className="font-medium capitalize dark:text-white dark:bg-slate-800"
          value="system"
        >
          system
        </option>
        <option
          className="font-medium capitalize dark:text-white dark:bg-slate-800"
          value="light"
        >
          light
        </option>
        <option
          className="font-medium capitalize dark:text-white dark:bg-slate-800"
          value="dark"
        >
          dark
        </option>
      </select>
    </div>
  );
};

export default App;
