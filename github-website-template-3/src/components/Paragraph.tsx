import React from "react";
import { Typography } from "@mui/material";

interface ParagraphProps {
  text: string;
  maxWidth?: string | number;
  mx?: string | number;
  textAlign?: "left" | "center" | "right" | "start" | "end";
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  maxWidth = "100%",
  mx = "auto",
  textAlign = "center",
}) => {
  return (
    <Typography
      variant="body1"
      component="p"
      sx={{
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#555",
        maxWidth,
        mx,
        textAlign,
        pt: 1,
      }}
    >
      {text}
    </Typography>
  );
};

export default Paragraph;
