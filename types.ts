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
  id?: string;
  onClick?: () => void;
};

export type HoverType = {
  name: string;
};

export type NextNavigationProps = {
  slug: string;
  service: string;
  data: (BriefService | MainService | Service)[];
};

export type TitleProps = {
  title: string;
  subtitle: string;
};

export type ContactDetails = {
  phone: {
    text: string;
    icon: string;
    href: string;
  };
  email: {
    text: string;
    icon: string;
    href: string;
  };
};

export type ContactInformation = {
  email: string;
  phone: string;
};

export type Services = {
  title: string;
  link: string;
};

export type additional_links = {
  title: string;
  url: string;
};

export type SocialMedia = {
  facebook: {
    url: string;
    icon: string;
  };
  twitter: {
    url: string;
    icon: string;
  };
  instagram: {
    url: string;
    icon: string;
  };
  linkedin: {
    url: string;
    icon: string;
  };
};

export type FooterData = {
  contactInformation: ContactInformation;
  services: Services[];
  socialMedia: SocialMedia;
  additional_links: additional_links[];
};

export type NavigationItem = {
  id: string;
  label: string;
  url: string;
  icon: string;
  submenu?: NavigationItem[];
};

export type Image = {
  src: string;
  alt: string;
};

export type SubSection = {
  title: string;
  icon: string;
  brief: string;
  examples: string[];
};

export type KeyFeature = {
  title: string;
  description: string;
};

export type Section = {
  id: number;
  title: string;
  description: string;
  url: string;
  img: Image;
  overview: string;
  key_features: KeyFeature[];
  sub_sections: SubSection[];
};

export type SectionsData = {
  sections: Section[];
};

export interface Subsection {
  icon: string;
  headline: string;
}

export interface Brief {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

export interface Service {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  mainBrief: string;
  subBrief: string;
  icon: string;
  description: string;
  url: string;
  img1: string;
  img2: string;
  subsections: Subsection[];
  brief: Brief[];
}

export interface WhyChooseUsData {
  whyChooseUs: Service[];
}

export type CookieListItem = {
  type?: string;
  description?: string;
  browser?: string;
  url?: string;
  name?: string;
};

export type CookiePolicySection = {
  title: string;
  icon: string;
  content: string;
  list?: CookieListItem[];
};

export type CookiePolicyContent = {
  title: string;
  lastUpdated: string;
  address: string;
  email: string;
  phone: string;
  sections: CookiePolicySection[];
};
