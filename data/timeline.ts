import type { LucideIcon } from "lucide-react";
import { GraduationCap, Briefcase } from "lucide-react";

export interface TimelineItem {
  type: "education" | "work";
  icon: LucideIcon;
  title: string;
  role: string;
  period: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Penn State University",
    role: "Bachelor of Science in Computer Science",
    period: "2022 - 2026",
    description:
      "Majoring in Computer Science, with a minor in Mathematics. Focus on  machine learning, and mathematical finance.",
  },
  {
    type: "work",
    icon: Briefcase,
    title: "MARA",
    role: "Policy Research Intern",
    period: "Summer 2024",
    description:
      "Crafted comprehensive policies for MRSM, sponsorship programs, finance, and TVET, impacting over 150,000 students.",
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Nittany AI Advance X Project Green Thumb",
    role: "MLE Intern",
    period: "Spring 2025",
    description:
      "Designed and optimized a scalable machine learning pipeline for image classification using iNaturalist Open Data, improving data preprocessing, model training, and evaluation to ensure efficiency and reproducibility.",
  },
  {
    type: "work",
    icon: Briefcase,
    title: "NUS (National University of Singapore)",
    role: "Research Intern",
    period: "Summer 2025",
    description:
      "Conducted a research on improving feature engineering using genetic programming on classification problem.",
  },
];
