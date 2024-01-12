import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";
import { Title } from "@/components/Title/Title.component";
import { chakra, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const ServicesLink = ({ href, src, alt }) => {
  return (
    <Link passHref href={href}>
      <chakra.a
        title={alt}
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        <Image
          style={{
            borderRadius: "12px",
          }}
          width={340}
          height={144}
          src={src}
          alt={alt}
        />
      </chakra.a>
    </Link>
  );
};

export const Services = () => {
  return (
    <chakra.section p={8} maxW="1280px" mx="auto">
      <Grid
        templateColumns={{
          lg: "2fr 1fr",
        }}
        gap={12}
      >
        <Grid
          templateColumns={{
            lg: "1fr 1fr",
          }}
          gap={4}
        >
          <ServicesLink
            href="/services/influencer"
            src="/diseno/servicios/upscale/xinfluencer.png"
            alt=""
          />

          <ServicesLink
            href="/services/lead"
            src="/diseno/servicios/upscale/xlead.png"
            alt=""
          />

          <ServicesLink
            href="/services/management"
            src="/diseno/servicios/upscale/xmanagement.png"
            alt=""
          />

          {/* <ServicesLink href="/services/photo"
            src="/diseno/servicios/upscale/xphoto.png" alt="" /> */}

          <ServicesLink
            href="/services/video"
            src="/diseno/servicios/upscale/xvideo.png"
            alt=""
          />

          <ServicesLink
            href="/services/web"
            src="/diseno/servicios/upscale/xweb.png"
            alt=""
          />
        </Grid>

        <Grid
          maxW="7xl"
          overflow="auto"
          templateColumns={{ base: "1fr", lg: "1fr " }}
          gap={1}
        >
          <iframe
            width="300"
            height="480"
            src="https://www.youtube.com/embed/K1YtwP2c8IU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Grid>

        <Flex alignItems={"center"}>
          <chakra.div
            p={4}
            w={{
              base: "100%",
              lg: "75%",
            }}
          >
            <Title textAlign="start" as="h3" fontSize="5xl">
              Our Services
            </Title>
            {/* <Text mb={4}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Text> */}
            <CTAGroup />
          </chakra.div>
        </Flex>
      </Grid>
    </chakra.section>
  );
};
