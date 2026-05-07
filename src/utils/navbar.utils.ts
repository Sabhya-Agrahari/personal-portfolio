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

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "about", label: "About", href: "/about", icon: User },
  { id: "skills", label: "Skills", href: "/skills", icon: Briefcase },
  { id: "education", label: "Education", href: "/education", icon: GraduationCap },
  { id: "experience", label: "Experience", href: "/experience", icon: BriefcaseBusiness },
  { id: "achievements", label: "Achievements", href: "/achievements", icon: Trophy },
  { id: "projects", label: "Projects", href: "/projects", icon: Folder },
  { id: "contact", label: "Contact", href: "/contact", icon: Mail },
] as const;

export const STAGGER_DELAYS = [
  "delay-[60ms]",
  "delay-[120ms]",
  "delay-[180ms]",
  "delay-[240ms]",
  "delay-[300ms]",
  "delay-[360ms]",
  "delay-[420ms]",
  "delay-[480ms]",
] as const;