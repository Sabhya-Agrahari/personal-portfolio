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
  ChevronRight,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
}

const sections: Section[] = [
  { id: "home", label: "Home", icon: <Home size={18} /> },
  { id: "about", label: "About", icon: <User size={18} /> },
  { id: "skills", label: "Skills", icon: <Briefcase size={18} /> },
  { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
  { id: "experience", label: "Experience", icon: <BriefcaseBusiness size={18} /> },
  { id: "achievements", label: "Achievements", icon: <Trophy size={18} />, path: "/achievements" },
  { id: "projects", label: "Projects", icon: <Folder size={18} />, path: "/projects" },
  { id: "contact", label: "Contact", icon: <Mail size={18} /> },
];

export default function CrystalPortfolioNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const router = useRouter();
  const pathname = usePathname();

  // ESC close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Active section tracking
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleClick = (item: Section) => {
    setActive(item.id);
    setOpen(false);

    if (item.path) {
      router.push(item.path);
      return;
    }

    if (pathname === "/") {
      const el = document.getElementById(item.id);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${item.id}`);
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      {/* 🔮 Floating Crystal Toggle */}
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 pointer-events-none">
        <button
          onClick={() => setOpen((p) => !p)}
          className="group relative pointer-events-auto w-6 h-6"
        >
          {/* Pulse Rings */}
          <span className="absolute inset-0 rounded-full border border-white/20 animate-ping" />
          <span className="absolute inset-0 rounded-full border border-white/10 animate-ping delay-200" />

          {/* Crystal */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-black shadow-lg backdrop-blur-md group-hover:scale-110 transition" />

          {/* Hint */}
          <div className="absolute -left-16 top-1 text-[10px] tracking-widest text-gray-400 flex items-center">
            {open ? "CLOSE" : "MENU"}
            <ChevronRight size={14} />
          </div>
        </button>
      </nav>

      {/* 🌌 Overlay Menu */}
      <div
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500
        ${open ? "bg-black/80 backdrop-blur-md opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-4 w-full max-w-md px-6">
          {sections.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className={`flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-300
              ${
                active === item.id
                  ? "bg-white/10 text-white scale-105"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                {item.label}
              </div>
              <ChevronRight size={16} />
            </button>
          ))}

          {/* Theme Toggle */}
          <div className="flex justify-center pt-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}