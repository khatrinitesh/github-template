import React, { useState } from "react";
// MUI
import { Typography, Box, Stack } from "@mui/material";
// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Title from "./Title";
import Paragraph from "./Paragraph";
// Components

interface ImageData {
  alt: string;
  url: string;
}

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imageData: ImageData[] = [
    {
      alt: "image1",
      url: "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?cs=srgb&dl=pexels-pixabay-259751.jpg&fm=jpg",
    },
    {
      alt: "image2",
      url: "https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?cs=srgb&dl=pexels-andrea-davis-5411784.jpg&fm=jpg",
    },
    {
      alt: "image3",
      url: "https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?cs=srgb&dl=pexels-daniel-frank-356809.jpg&fm=jpg",
    },
    {
      alt: "image4",
      url: "https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?cs=srgb&dl=pexels-get-lost-mike-6267516.jpg&fm=jpg",
    },
    {
      alt: "image5",
      url: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg",
    },
  ];

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 2,
        display: { xs: "flex" },
      }}
    >
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
        }}
      >
        <Title text="Plans and dimension" textAlign="center" />
        <Typography
          variant="h5"
          component="h4"
          align="center"
          sx={{ paddingTop: 1 }}
        >
          Rooms Gallery
        </Typography>
        <Paragraph
          text="We have more 5000 reviews and our customers trust on our quality product and trust own our product. If you are interested, contact us."
          maxWidth="sm"
          mx="auto"
          textAlign="center"
        />
      </Box>

      <Box sx={{ maxWidth: 700, width: "100%" }}>
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop
          selectedItem={currentIndex}
          onChange={handleChange}
          className="carousel-container"
        >
          {imageData.map((image) => (
            <div key={image.alt}>
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;
