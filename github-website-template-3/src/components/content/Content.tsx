import React from "react";
import { Typography, IconButton, Card, CardContent } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import Grid from "@mui/material/Grid";
import { facilitiesData } from "./facilitiesData";
import Title from "../Title";
import Paragraph from "../Paragraph";

const Content: React.FC = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 2,
      }}
    >
      {/* LEFT SECTION */}
      <Grid item xs={12} sm={12} md={5} component="section">
        <Title text="What we are offering?" textAlign="start" />

        <Typography variant="h6" component="h4" sx={{ fontWeight: 400, pt: 1 }}>
          Property facilities
        </Typography>

        <Paragraph
          text="We have more than 5000 reviews and our customers trust our quality products and services."
          maxWidth="75%"
          mx={0}
          textAlign="start"
        />
      </Grid>

      {/* FACILITY CARDS */}
      {facilitiesData.slice(0, 2).map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Card
            square
            sx={{
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid #ccc",
            }}
          >
            <CardContent>
              <IconButton>{item.icon}</IconButton>
              <Typography
                variant="h5"
                component="p"
                sx={{ fontWeight: 700, textTransform: "capitalize" }}
              >
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* MIDDLE ICON */}
      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Card
          square
          sx={{
            boxShadow: "none",
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <ArrowCircleRightRoundedIcon fontSize="large" color="secondary" />
          </CardContent>
        </Card>
      </Grid>

      {/* REMAINING FACILITIES */}
      {facilitiesData.slice(2).map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Card
            square
            sx={{
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid #ccc",
            }}
          >
            <CardContent>
              <IconButton>{item.icon}</IconButton>
              <Typography
                variant="h5"
                component="p"
                sx={{ fontWeight: 700, textTransform: "capitalize" }}
              >
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
