import type { ReactNode } from "react";
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
};

export interface CardProps {
  title: string;
  description: string;
  img: string;
}

export interface CourseOutline {
  title: string;
  duration: string;
  level: string;
  mode: string;
  objective: string;
  learningOutcomes: string[];
  roadmap: {
    week: string;
    topics: string[];
    logicFocus?: string;
    softSkills?: string;
  }[];
}

export type OrbitingCirclesProps = {
  children: React.ReactNode;
  radius?: number;
  duration?: number;
  reverse?: boolean;
  className?: string;
  showOrbit?: boolean;
};

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  icons: ReactNode[];
  image: string;
}

export interface ProjectDataImage {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  overlay: string;
  hoverOverlay: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  overlay: string;
  hoverOverlay: string;
  description: string;
}

export interface Quality {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export interface ServiceSectionItem {
  slug?: string;
  title: string[];
  hoverDescription: string;
  description: string;
  bgColor: string;
  textColor: string;
  tagBg: string;
  tagText: string;
  image: string;
  arrowBg: string;
  arrowText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  testimonial: string;
}
