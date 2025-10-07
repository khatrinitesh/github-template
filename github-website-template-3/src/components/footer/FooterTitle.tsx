import { Typography } from "@mui/material";
interface FooterTitleProps {
  text: string;
}

const FooterTitle = ({ text }: FooterTitleProps) => {
  return (
    <Typography
      variant="h6"
      component="h6"
      sx={{
        fontWeight: 700,
        textTransform: "capitalize",
        pb: 1,
      }}
    >
      {text}
    </Typography>
  );
};

export default FooterTitle;
