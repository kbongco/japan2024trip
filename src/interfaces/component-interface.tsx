import { ReactNode } from "react";

export interface TrainLinesComponent {
  name: string;
  color: string;
  city?: string;
}

export interface CardComponent {
  icon: ReactNode;
  title: string;
  description: string;
  value?: string;
}