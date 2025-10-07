import type { FooterConstants } from "../../interface";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const footerData: FooterConstants = {
  columns: [
    {
      title: "address",
      links: [
        { text: "15th Louis St, London 92382, ENG" },
        { text: "25 999-345-10800" },
        { text: "info@housesales.com" },
      ],
    },
    {
      title: "our services",
      links: [
        { text: "buy house" },
        { text: "sell house" },
        { text: "rent house" },
        { text: "build house" },
      ],
    },
    {
      title: "our company",
      links: [
        { text: "reporting" },
        { text: "get in touch" },
        { text: "management" },
      ],
    },
  ],
  socials: [
    { icon: <InstagramIcon />, to: "" },
    { icon: <FacebookIcon />, to: "" },
  ],
  companyName: "HBSales Inc.",
  year: 2025,
};
