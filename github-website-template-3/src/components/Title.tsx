import React from "react";
import { Typography } from "@mui/material";

interface TitleProps {
  text: string;
  textAlign?: "left" | "center" | "right" | "start" | "end";
  color?: string;
}

const Title: React.FC<TitleProps> = ({
  text,
  textAlign = "center",
  color = "#1c2859",
}) => {
  return (
    <Typography
      variant="h4"
      component="h2"
      sx={{
        fontWeight: 700,
        textTransform: "capitalize",
        textAlign,
        color,
        mb: 1,
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
