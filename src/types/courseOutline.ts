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