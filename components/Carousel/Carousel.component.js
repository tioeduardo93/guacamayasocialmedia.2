import React from "react";
import { chakra } from "@chakra-ui/react";
import Slider from "react-slick";
import { useWindowsSize } from "@/hooks/useWindowSize";

const images = [
  "/home/influencers.png",
  "/home/lead_gen.png",
  "/home/management.png",
  "/home/video_comercials.png",
  "/home/website.png",
];

export const Carousel = () => {
  const { width } = useWindowsSize();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <chakra.div
      position={"relative"}
      width={'700px'}
      height={'700px'}
      display={{
          base: 'none',
          md: 'block',
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <chakra.div
            width={'700px'}
            height={'700px'}
            key={`image-${index}`}
            bgImage={image}
            bgPosition="center"
            bgSize="contain"
            bgRepeat="no-repeat"
          />
        ))}
      </Slider>
    </chakra.div>
  );
};
