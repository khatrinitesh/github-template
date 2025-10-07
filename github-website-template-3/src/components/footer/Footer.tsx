import React from "react";
import { Box, Stack, styled, Typography, Link } from "@mui/material";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import { footerData } from "./footerData";

// Styled Components
const StackColumn = styled(Stack)(() => ({
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  flex: 1,
  gap: 8,
  textAlign: "center",
}));

const BoxRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#ededed",
  flex: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 30,
  },
}));

// Footer Component
const Footer: React.FC = () => {
  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      {footerData.columns.map((col, i) => (
        <StackColumn key={i}>
          <FooterTitle text={col.title} />
          {col.links?.map((link, index) => (
            <FooterLink key={index} text={link.text} href={link.href} />
          ))}
        </StackColumn>
      ))}

      <StackColumn>
        <FooterTitle text="HBSales" />
        <Stack direction="row" width="70px" justifyContent="space-between">
          {footerData.socials.map((social, index) => (
            <Link
              key={index}
              to={social.href}
              variant="body2"
              sx={{
                color: "#414141",
                "&:hover": { color: "#1c2859" },
              }}
            >
              {social.icon}
            </Link>
          ))}
        </Stack>
        <Typography variant="caption" component="p">
          &copy; {footerData.year} {footerData.companyName}
        </Typography>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
