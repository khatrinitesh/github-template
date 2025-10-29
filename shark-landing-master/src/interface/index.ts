export interface AccordionItem {
  id: string;
  header: string;
  body: string;
}
export interface CommunityData {
  title: string;
  description: string;
  buttons: {
    id: string;
    label: string;
    action: "mint" | "wallet";
    className: string;
  }[];
  imageSrc: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionContent {
  smallTitle: string;
  largeTitle: string;
  description: string;
  faqs: FaqItem[];
}

export interface FooterContent {
  logoSrc: string;
  altText: string;
  description: string;
  company: string;
}
