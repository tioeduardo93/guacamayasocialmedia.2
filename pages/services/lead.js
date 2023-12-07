/* eslint-disable react/no-unescaped-entities */
import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";
import { MainLayout } from "@/layouts/MainLayout";
import {
  Box,
  Center,
  Heading,
  Text,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <MainLayout>
      <img src="/diseno/servicios/banners/lead_generation.jpg" alt="" />

      <Box
        p={4}
        mt={8}
        bg="white"
        maxW="7xl"
        mx="auto"
        px={{ base: "6", md: "8" }}
        spacing="12"
      >
        <Heading textAlign={"center"} size="2xl" fontWeight="extrabold">
          Guacamaya Lead generation services
        </Heading>
        <Text textAlign="center" fontSize="2xl" margin={20}>
          This is how we generate leads for yor company:
        </Text>
        <Grid
          maxW="7xl"
          overflow="auto"
          templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr 1fr" }}
          gap={1}
        >
          <iframe
            width="300"
            height="480"
            src="https://www.youtube.com/embed/rwXcbgA4emA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="480"
            src="https://www.youtube.com/embed/fnEguNA8gaw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="480"
            src="https://www.youtube.com/embed/ejYl1km1O4U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="480"
            src="https://www.youtube.com/embed/D_RvhePfAAE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Grid>
        <Text
          py={8}
          textAlign={"center"}
          fontSize="lg"
          fontWeight="900"
          color={useColorModeValue("gray.600", "whiteAlpha.700")}
        >
          How many sales can you make from the 100 customers we will provide you
          with?
        </Text>
        <Text
          py={8}
          textAlign={"center"}
          fontSize="lg"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "whiteAlpha.700")}
        >
          A lead generation service provider manages campaigns to discover
          customers for companies.
          <br />
          <br /> Guacamaya Social Media has a remote team specialized in sales
          that will not only get the data of your potential customers, but will
          build a link between this customer and your company's vendors to make
          it much easier to make a sale. Some of these providers will help with
          follow-up campaigns to ensure the highest conversion rate.
          <br />
          <br /> The lead generation service provides:
          <br />
          <br /> - 100 to 200 leads per month.
          <br />
          <br /> - Information such as names, phone numbers and buying interests
          of the prospect.
          <br />
          <br /> - A professional commercial video with a professional speaker
          that companies who hire us can use for their own marketing purposes
          independently of our lead generation service.
          <br />
          <br /> - We will provide you with an organized database of prospect
          numbers and data so that companies can do their own follow up with
          prospects.
        </Text>
        <Text
          py={8}
          textAlign={"center"}
          fontSize="lg"
          fontWeight="900"
          color={useColorModeValue("gray.600", "whiteAlpha.700")}
        >
          Get a consultation today and let's close sales now!
        </Text>

        <Text textAlign="center" fontSize="2xl" marginTop={10}>
          In Simple words, we are going to pre-sell to your clients.
        </Text>
        <Center mt={8}>
          <CTAGroup reference="Desde la pagina de lead generation" />
        </Center>
      </Box>
    </MainLayout>
  );
};

export default Page;
