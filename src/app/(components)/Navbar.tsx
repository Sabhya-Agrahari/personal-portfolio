/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import ShimmerButton from "./Button";
import { NAV_ITEMS } from "../../utils/navbar.utils";

export default function Navbar() {
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
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleClick = (item: any) => {
    setActive(item.id);
    setOpen(false);

    if (item.href) {
  router.push(item.href);
  return;
}

    const el = document.getElementById(item.id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🔹 Toggle Button */}
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4">
        <button
          onClick={() => setOpen((p) => !p)}
          className="px-4 py-2 flex items-center gap-1 text-[10px] tracking-[0.3em] text-gray-400 hover:text-white transition cursor-pointer"
        >
          {open ? "CLOSE" : "MENU"}
          <ChevronRight
            size={14}
            className={`transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
        </button>
      </nav>

      {/* 🔹 Overlay Menu */}
      <div
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500
        ${
          open
            ? "bg-black/80 backdrop-blur-md opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 w-full max-w-md px-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <ShimmerButton
                key={item.id}
                onClick={() => handleClick(item)}
                className={`
                  w-full justify-between cursor-pointer
                  ${active === item.id ? "scale-[1.03]" : ""}
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>

              </ShimmerButton>
            );
          })}
        </div>
      </div>
    </>
  );
}