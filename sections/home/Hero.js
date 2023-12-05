import { Carousel } from "@/components/Carousel/Carousel.component";
import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";
import { Title } from "@/components/Title/Title.component";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer.component";
import { Grid, chakra } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        xl: "1fr 1fr",
      }}
      justifyItems="center"
      alignItems={"center"}
      minH="500px"
      className="bg-cool"
    >
      <chakra.div>
        <Title
          maxW="500px"
          mb={4}
          textTransform="uppercase"
          textAlign="start"
          fontSize={{
            base: "2rem",
            lg: "4rem",
          }}
        >
          Videos, management <br />
          Ads & Design
        </Title>
        <CTAGroup />
      </chakra.div>

      <chakra.div p={12} position="relative">
        <VideoPlayer />

        <Carousel />
      </chakra.div>
    </Grid>
  );
};
