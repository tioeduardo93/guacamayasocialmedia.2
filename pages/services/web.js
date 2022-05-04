/* eslint-disable react/no-unescaped-entities */
import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";
import { MainLayout } from "@/layouts/MainLayout";
import {
  Box,
  Center,
  Circle,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <MainLayout>
      <img src="/diseno/servicios/banners/web_design.jpg" alt="" />
      <Box
        mt={8}
        bg="white"
        maxW="7xl"
        mx="auto"
        px={{ base: "6", md: "8" }}
        py={{base: 4, lg: 12}}
        spacing="12"
      >
        <Heading textAlign={"center"} size="2xl" fontWeight="extrabold">
          Get Found Online and Turn Clicks Into Customers With a Well-Optimized Website
        </Heading>
        <Text
          py={8}
          textAlign={"center"}
          fontSize="lg"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "whiteAlpha.700")}
        >
       The internet is a goldmine of opportunities for all kinds of businesses worldwide. Leverage its power to your advantage. Establish your digital presence today and discover your market potential with Thrive Internet Marketing Agency’s website design services. From website design and development to search engine optimization (SEO) and site maintenance, we’ve got you covered!
        </Text>
        <Grid
          gap={8}
          my={12}
          p={{
            base: "4",
            lg: "0",
          }}
          templateColumns={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
          }}
        >
          <Box>
            <Heading
              display="flex"
              alignItems="center"
              size="xl"
              mb={2}
              fontWeight="extrabold"
            >
              <Circle size="24px" mr={2} bg="primary" />
              Competitive design
            </Heading>
            <Text>
             We combine your brand style and the latest web design trends, relying on the data gathered through rival company analysis, market studies and user research. This approach allows us to deliver one-of-a-kind and highly competitive designs that strengthen your brand identity, reflect brand’s values and support your marketing goals.
            </Text>
          </Box>

          <Box>
            <Heading
              display="flex"
              alignItems="center"
              size="xl"
              mb={2}
              fontWeight="extrabold"
            >
              <Circle size="24px" mr={2} bg="primary" />
              Focus on your business objectives
            </Heading>
            <Text>
              When working on a design of a website or web portal, our team always targets your specific marketing and customer service objectives. We establish productive cooperation with the stakeholders to understand your business processes and deliver a design that will empower your individual conversion strategy.
            </Text>
          </Box>

          <Box>
            <Heading
              display="flex"
              alignItems="center"
              size="xl"
              mb={2}
              fontWeight="extrabold"
            >
              <Circle size="24px" mr={2} bg="primary" />
Tailored to your target audience
            </Heading>
            <Text>
       We perform in-depth analysis of your users' expectations at the very start of the project. The data we use for tailoring your visuals is gained from usability studies (in case of a web solution in development) or comprehensive UX and UI audit (in case of an already developed web solution).
            </Text>
          </Box>

          <Box>
            <Heading
              display="flex"
              alignItems="center"
              size="xl"
              mb={2}
              fontWeight="extrabold"
            >
              <Circle size="24px" mr={2} bg="primary" />
              Responsive Web Design Services
            </Heading>
            <Text>
              Responsive web design services ensure a web solution’s adaptive behavior to the screen size it is displayed on. Following the mobile-first strategy, ScienceSoft translates the functionality of your web solution into intuitive, smoothly functioning, and highly converting digital experience.
            </Text>
          </Box>
        </Grid>

        <Text textAlign="center" fontSize="2xl">
          Don’t Let Poor Web Design Ruin Your Conversions! <br />
          Let us handle the responsive design of your website or web portal to make it fully functional, easy to navigate, and high-converting across all devices.
        </Text>

        <Center mt={8}>
          <CTAGroup reference="desde la pagina de web-design" />
        </Center>
      </Box>
    </MainLayout>
  );
};

export default Page;
