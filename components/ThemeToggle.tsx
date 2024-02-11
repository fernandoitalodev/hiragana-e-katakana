import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={` justify-between shadow-lg flex  rounded-lg w-16 text-xl dark:shadow-black `}
    >
      <button
        onClick={() => setTheme("light")}
        className={`p-2 px-1 bg-blue-500 dark:bg-transparent ${
          theme === "light" ? "text-white px-2" : ""
        }  rounded-s-lg px-2`}
      >
        <FaSun />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-e-lg p-2 
         dark:text-white dark:bg-blue-500 px-2`}
      >
        <FaMoon />
       
      </button>
    </div>
  );
};

export default ThemeToggle;
