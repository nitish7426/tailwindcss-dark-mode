import React, { useEffect, useState } from "react";
import { BiSun, BiMoon, BiDesktop } from "react-icons/bi";

const DarkModeNew = () => {
  const [theme, setTheme] = useState(() => {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "system";
  });
  const buttons = [
    {
      text: "system",
      icon: <BiDesktop size={25} />,
    },
    {
      text: "light",
      icon: <BiSun size={25} />,
    },
    {
      text: "dark",
      icon: <BiMoon size={25} />,
    },
  ];

  const onWindowMatch = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  onWindowMatch();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <div className="min-h-screen w-full py-6 px-4 bg-white dark:bg-slate-900 dark:text-white space-y-5">
      <div className="w-fit py-2 px-3 rounded-md mx-auto space-x-2 bg-slate-100 dark:bg-slate-800 leading-none">
        {buttons.map(({ text, icon }) => (
          <button
            className={`hover:text-cyan-500 ${
              theme === text && "text-cyan-500"
            }`}
            key={text}
            onClick={() => setTheme(text)}
          >
            {icon}
          </button>
        ))}
      </div>
      <h3 className="text-4xl font-bold text-center capitalize">
        dark mode tailwind css
      </h3>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        totam, deleniti aperiam aspernatur explicabo quia perferendis ipsa nihil
        quam libero voluptas. Quos debitis culpa eum voluptate quisquam impedit
        ut quod sequi numquam amet nobis molestiae dicta cumque, saepe deserunt
        voluptas nostrum fugit non? Sapiente corrupti quo consequuntur animi
        repellat voluptate! Fugit distinctio nemo autem labore nihil dolorum,
        consectetur vero corporis adipisci rerum voluptates beatae rem soluta
        tempore sapiente doloremque ab minima suscipit? Exercitationem iusto
        magnam labore sunt numquam incidunt ratione error fugiat omnis.
        Distinctio voluptates quod quae ipsa sunt temporibus esse quo, fugiat
        quis, eveniet repellendus aspernatur, iste nemo dolores?
      </p>
    </div>
  );
};

export default DarkModeNew;
