import React from "react";
import { Link } from "@mui/material";

interface FooterLinkProps {
  text: string;
  href?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text, href = "#" }) => {
  return (
    <Link
      href={href}
      variant="body2"
      sx={{
        fontSize: "0.9rem",
        fontWeight: 400,
        textDecoration: "none",
        color: "#414141",
        textTransform: "capitalize",
        "&:hover": { color: "#1c2859" },
      }}
    >
      {text}
    </Link>
  );
};

export default FooterLink;
