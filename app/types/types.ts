import { StaticImageData } from "next/image";

export type ImgType = {
  description: string;
  img: string;
  bgColor?: string;
}[];

export type Type = {
  description: string;
  object: string;
  bgColor?: string;
}[];

export type ProgressAnimationPropsType = {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

export type TitleCardProps = {
  title: string;
};

export type UrlType = {
  url: string;
};

export type TechStackCardsPropsType = {
  title: string;
  skills: string;
  list: string[];
  state?: boolean;
  xStart: number;
  xEnd: number;
};

export type ProjectCardPropsType = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  source_code_link: string;
};

export type AnimationVariant = {
  hidden: {
    x?: number | string;
    y?: number | string;
    opacity?: number;
    scale?: number;
  };
  show: {
    x?: number | string;
    y?: number | string;
    opacity?: number;
    scale?: number;
    transition: {
      type?: "spring" | "tween" | "ease"; // Made optional
      duration?: number; // Made optional
      delay?: number;
      ease?: string;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
};

export type ContactFormType = {
  name: string;
  email: string;
  message: string;
};
