/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Folder,
  Mail,
  GraduationCap,
  Trophy,
  BriefcaseBusiness,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const sections = [
  { id: "home", icon: <Home size={20} /> },
  { id: "about", icon: <User size={20} /> },
  { id: "skills", icon: <Briefcase size={20} /> },
  { id: "education", icon: <GraduationCap size={20} /> },
  { id: "experience", icon: <BriefcaseBusiness size={20} /> },

  { id: "achievements", icon: <Trophy size={20} />, path: "/achievements" },
  { id: "projects", icon: <Folder size={20} />, path: "/projects" },
  { id: "contact", icon: <Mail size={20} /> },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle click
  const handleClick = (item: any) => {
    setActive(item.id);

    if (item.path) {
      router.push(item.path);
      return;
    }

    if (pathname === "/") {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${item.id}`);

      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <div
      className="fixed left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 
      bg-[#0f172a]/60 backdrop-blur-2xl p-5 rounded-full 
      border border-cyan-400/20 
      shadow-[0_0_40px_rgba(0,212,255,0.25)] 
      z-50"
    >
      {sections.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className={`group relative w-12 h-12 flex items-center justify-center 
          rounded-full cursor-pointer transition-all duration-300

          ${
            active === item.id
              ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-[0_0_25px_#00d4ff,0_0_50px_rgba(0,212,255,0.5)] scale-110"
              : "text-gray-400 border border-cyan-500/10 hover:bg-cyan-500/20 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.6)]"
          }`}
        >
          {item.icon}

          {/* Tooltip */}
          <span
            className="absolute left-14 bg-[#020617] border border-cyan-500/20 
            text-white text-xs px-2 py-1 rounded-md opacity-0 
            group-hover:opacity-100 transition whitespace-nowrap capitalize"
          >
            {item.id}
          </span>
        </div>
      ))}
    </div>
  );
}