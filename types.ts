// src/types/types.ts

export type BriefService = {
  id: number;
  title: string;
  main: string;
  subTitle: string;
  description: string;
  url: string;
  img: {
    src: string;
    alt: string;
  };
  content: {
    main: string;
    p1: string;
    p2: string;
  };
};

export type MainService = {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: string;
  img?: {
    src: string;
    alt: string;
  };
};

export type Content = {
  main: string;
  p1: string;
  p2: string;
};

export type Params = {
  slug: string;
};

export type ServiceSlugProps = {
  title: string;
  subTitle: string;
  main: string;
  description: string;
  content: Content;
  img: {
    src: string;
    alt: string;
  };
  params: Params;
  data: (BriefService | MainService)[];
};

export type Scrolls = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export type HoverType = {
  name: string;
};

export type NextNavigationProps = {
  slug: string;
  data: (BriefService | MainService)[];
};

export type TitleProps = {
  title: string;
  subtitle: string;
};
