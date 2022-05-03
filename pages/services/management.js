/* eslint-disable react/no-unescaped-entities */
import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";
import { MainLayout } from "@/layouts/MainLayout";
import { CheckIcon } from "@chakra-ui/icons";
import {
  chakra,
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
  Grid,
  Stack,
} from "@chakra-ui/react";

export const Stat = (props) => {
  const { title, value, children, accentColor, ...rest } = props;
  return (
    <Box {...rest}>
      <Flex as="dl" direction="column-reverse">
        <Box as="dt" fontWeight="bold">
          {title}
        </Box>
        <Box
          order={1}
          as="dd"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="extrabold"
          color={accentColor}
        >
          {value}
        </Box>
      </Flex>
      <Divider aria-hidden my="4" borderWidth="2px" borderColor={accentColor} />
      <Box
        color={useColorModeValue("gray.600", "whiteAlpha.700")}
        fontWeight="medium"
      >
        {children}
      </Box>
    </Box>
  );
};

const Page = () => {
  return (
    <MainLayout>
      <img src="/diseno/servicios/banners/management.jpg" alt="" />
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
          Our Guacamaya Facebook Management Services
        </Heading>
        <Text
          py={8}
          textAlign={"center"}
          fontSize="lg"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "whiteAlpha.700")}
        >
          As a full-service digital marketing agency, Guacamaya Social media
          provides a wide range of social media management offerings. We can
          handle everything from your Facebook and Instagram management to your
          paid advertising campaigns across all of your social media accounts.
          Either way, every social campaign we manage is crafted to support your
          marketing objectives and help you achieve your business goals. We
          strategize, execute, measure.
        </Text>

        <SimpleGrid columns={{ base: 1 }} spacing={10}>
          <HStack align={"top"}>
            <Box color={"green.400"} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={"start"}>
              <Text fontSize="2xl" fontWeight={600}>
                Partial Guacamaya Management
              </Text>
              <Text color={"gray.600"}>
                We offer monthly and rolling social media management packages,
                We can build your Facebook and instagram profiles from scratch,
                which includes:
                <chakra.ul my={6}>
                    <Grid gap={'.5rem 2rem'} templateColumns={{
                        base: '1fr',
                        lg: '1fr 1fr'
                    }} as="ul">
                  <li>Setting strategic goals.</li>
                  <li>Incorporating calls-to-action on your Business Page.</li>
                  <li>Helping you build up your base of followers.</li>
                  <li>Creating a posting schedule.</li>
                  <li>
                    Posting social media content like instant stories, links,
                    questions, photos, videos and more.
                  </li>
                    </Grid>
                </chakra.ul>
              </Text>
              <Badge colorScheme="brand">
                INCLUDED: DESING / PHOTOSHOOT / CONTENT CREATING / POSTING
              </Badge>
            </VStack>
          </HStack>
        <Text fontSize="2xl" fontWeight="bold">
            Why should i get  Guacamaya Professional Social Media Management?
        </Text>
        <chakra.ol ml={4}>
            <chakra.li mb={4}>
                <chakra.span
                    fontWeight="bold"
                    fontSize="xl"
                >Experts Save You Time</chakra.span><br />
                You are the expert in your industry and it took you time and experience to get there. When it comes to pro social media management agencies, it is no different. With proven strategies for increasing brand awareness and engagement, the guesswork and risk of unanticipated pitfalls is taken out for you. Your time is valuable, are you willing to sacrifice another area of business for social media management?  We don't think so
            </chakra.li>

            <chakra.li mb={4}>
                <chakra.span
                    fontWeight="bold"
                    fontSize="xl"
                >Building Brand Recognition</chakra.span><br />
                Your brand is your unique fingerprint in a sea of competitors. How do you want to be presented to the world? What is “that thing” only you can offer? In knowing which platforms are ideal for your brand and then regularly posting, creating guidelines for relevant posted topics, ensuring visuals align across profiles consistently, and developing a specific voice – your personality can be reflected to connect with your audience and draw engagement.
            </chakra.li>

            <chakra.li mb={4}>
                <chakra.span
                    fontWeight="bold"
                    fontSize="xl"
                >Content Creator</chakra.span><br />
                The content created and adapted for social media is a vital component of marketing. Capturing pictures and video for Facebook and Instagram, writing short and effective  posts, creating several iterations of post copy. These are just some of the ways a social media manager makes impactful content appropriate for each network.
            </chakra.li>
        </chakra.ol>

        </SimpleGrid>


        <SimpleGrid columns={{ base: 1 }} spacing={10}>
          <HStack align={"top"}>
            <Box color={"green.400"} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={"start"}>
              <Text fontSize="2xl" fontWeight={600}>
                Full Guacamaya Management
              </Text>
              <Text color={"gray.600"}>
                Facebook Ad management is one of our specialties at Guacamaya Social Media. We can within Ad Manager and the Power Editor to oversee your ad campaigns from start to finish. We’ll help you refine your target audiences, select the right Facebook ad formats, allocate spend strategically across your other channels and measure the performance of your paid social campaigns.
              </Text>
              <Badge colorScheme="brand">
                INCLUDED: DESINGS / PHOTOSHOOT / CONTENT CRERATING / POSTING / SOCIAL MEDIA AD MANAGEMENT / CAMPAIGN FOLLOW-UP /  $400 BUDGET FOR INVESTMENTS ADS
              </Badge>
            </VStack>
          </HStack>
        <Text fontSize="2xl" fontWeight="bold">
            Why get Full  Guacamaya Social Media Ad Management ?
        </Text>
        <chakra.ol ml={4}>
            <chakra.li mb={4}>
                <chakra.span
                    fontWeight="bold"
                    fontSize="xl"
                >We Target Your Exact Audience</chakra.span><br />
            </chakra.li>

            <chakra.li mb={4}>
                <chakra.span
                    fontWeight="bold"
                    fontSize="xl"
                >We  Create Ads Catering to Your Specific Objective</chakra.span><br />
            </chakra.li>

            <chakra.li mb={4}>
                <chakra.span
                    fontWeight="bold"
                    fontSize="xl"
                >We make you Reach Far More People Than You Ever Will With Organic Posts</chakra.span><br />
            </chakra.li>
        </chakra.ol>

        </SimpleGrid>
            <CTAGroup />

      </Box>
    </MainLayout>
  );
};

export default Page;
