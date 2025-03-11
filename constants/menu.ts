import { AboutIcon, BlogIcon, EcosystemIcon, HomeIcon, RevenueIcon } from "../assets/imgs";

export const socialsMenu = [
  {
    title: "Instagram",
    link: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/",
  },
  {
    title: "Twitter",
    link: process.env.NEXT_PUBLIC_TWITTER_URL || "/",
  },
  {
    title: "Tiktok",
    link: process.env.NEXT_PUBLIC_TIKTOK_URL || "/",
  },
  {
    title: "Facebook",
    link: process.env.NEXT_PUBLIC_FACEBOOK_URL || "/",
  },
  {
    title: "Linkedin",
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL || "/",
  },
  {
    title: "Youtube",
    link: process.env.NEXT_PUBLIC_YOUTUBE_URL || "/",
  },
];

export const categoriesMenu = [
  {
    title: "Company",
    content: [
      {
        name: "About",
        link: "",
      },
      {
        name: "Pricing",
        link: "",
      },
      {
        name: "Jobs",
        link: "",
      },
      {
        name: "Blog",
        link: "",
      },
    ],
  },
  {
    title: "Product",
    content: [
      {
        name: "Sales Software",
        link: "",
      },
      {
        name: "Marketplace",
        link: "",
      },
      {
        name: "Terms & Conditions",
        link: "",
      },
      {
        name: "Privacy Policy",
        link: "",
      },
    ],
  },
  {
    title: "Help Center",
    content: [
      {
        name: "Community",
        link: "",
      },
      {
        name: "Knowledge Base",
        link: "",
      },
      {
        name: "Academy",
        link: "",
      },
      {
        name: "Support",
        link: "",
      },
    ],
  },
];

export const policiesMenu = [
  {
    title: "Terms",
    link: "",
  },
  {
    title: "Privacy",
    link: "",
  },
  {
    title: "Cookies",
    link: "",
  },
  {
    title: "Legal",
    link: "",
  },
  {
    title: "Recalls",
    link: "",
  },
];

export const headerMenu = [
  {
    title: "Home",
    link: "/",
    icon: HomeIcon
  },
  {
    title: "About Us",
    link: "#about",
    icon: AboutIcon
  },
  {
    title: "Revenue",
    link: "#revenue",
    icon: RevenueIcon
  },
  {
    title: "Ecosystem",
    link: "#ecosystem",
    icon: EcosystemIcon
  },
  {
    title: "Blog",
    link: "/app",
    icon: BlogIcon
  },
];
