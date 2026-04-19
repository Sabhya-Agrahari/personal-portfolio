"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme(); // ✅ FIX

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">

      {/* Light */}
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md border ${
          resolvedTheme === "light"
            ? "bg-gray-200"
            : "border-gray-300"
        }`}
      >
        <Sun size={18} />
      </button>

      {/* Dark */}
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md border ${
          resolvedTheme === "dark"
            ? "bg-gray-200"
            : "border-gray-300"
        }`}
      >
        <Moon size={18} />
      </button>

      {/* Blue */}
      <button
        onClick={() => setTheme("blue")}
        className={`w-5 h-5 rounded-full border ${
          resolvedTheme === "blue" ? "ring-2 ring-black" : ""
        } bg-blue-500`}
      />

      {/* Purple */}
      <button
        onClick={() => setTheme("purple")}
        className={`w-5 h-5 rounded-full border ${
          resolvedTheme === "purple" ? "ring-2 ring-black" : ""
        } bg-purple-500`}
      />

    </div>
  );
}