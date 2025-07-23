import type { ReactNode } from "react";

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