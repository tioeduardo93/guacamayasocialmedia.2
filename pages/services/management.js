import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";
import { MainLayout } from "@/layouts/MainLayout";
import {
  Box,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <MainLayout>
      <img src="/diseno/servicios/banners/management.jpg" alt="" />
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
          Our Guacamaya Facebook Management Services
        </Heading>
        <Center mt={6}>
          <CTAGroup reference="Desde la pagina de management" />
        </Center>
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

        <Box my={12}>
          <Heading size="xl" mb={4} fontWeight="extrabold">
            Partial Guacamaya Management
          </Heading>
          <Text color={"gray.600"} mb={4}>
            We offer monthly and rolling social media management packages,
            We can build your Facebook and instagram profiles from scratch,
            which includes:
          </Text>
          <Box mb={6}>
            <Text mb={2}>• Setting strategic goals.</Text>
            <Text mb={2}>• Incorporating calls-to-action on your Business Page.</Text>
            <Text mb={2}>• Helping you build up your base of followers.</Text>
            <Text mb={2}>• Creating a posting schedule.</Text>
            <Text mb={2}>• Posting social media content like instant stories, links, questions, photos, videos and more.</Text>
          </Box>
          <Box bg="brand.400" color="white" p={3} borderRadius="md" mb={8}>
            INCLUDED: DESING / PHOTOSHOOT / CONTENT CREATING / POSTING
          </Box>
        </Box>

        <Box my={12}>
          <Heading size="xl" mb={4} fontWeight="extrabold">
            Why should i get Guacamaya Professional Social Media Management?
          </Heading>
          <Box ml={4}>
            <Text mb={4}>
              <Text as="span" fontWeight="bold" fontSize="xl">Experts Save You Time</Text>
              <br />
              You are the expert in your industry and it took you time and
              experience to get there. When it comes to pro social media
              management agencies, it is no different. With proven strategies
              for increasing brand awareness and engagement, the guesswork and
              risk of unanticipated pitfalls is taken out for you. Your time is
              valuable, are you willing to sacrifice another area of business
              for social media management? We don't think so
            </Text>
            <Text mb={4}>
              <Text as="span" fontWeight="bold" fontSize="xl">Building Brand Recognition</Text>
              <br />
              Your brand is your unique fingerprint in a sea of competitors. How
              do you want to be presented to the world? What is "that thing"
              only you can offer? In knowing which platforms are ideal for your
              brand and then regularly posting, creating guidelines for relevant
              posted topics, ensuring visuals align across profiles
              consistently, and developing a specific voice – your personality
              can be reflected to connect with your audience and draw
              engagement.
            </Text>
            <Text mb={4}>
              <Text as="span" fontWeight="bold" fontSize="xl">Content Creator</Text>
              <br />
              The content created and adapted for social media is a vital
              component of marketing. Capturing pictures and video for Facebook
              and Instagram, writing short and effective posts, creating several
              iterations of post copy. These are just some of the ways a social
              media manager makes impactful content appropriate for each
              network.
            </Text>
          </Box>
        </Box>

        <Box my={12}>
          <Heading size="xl" mb={4} fontWeight="extrabold">
            Full Guacamaya Management
          </Heading>
          <Text color={"gray.600"} mb={4}>
            Facebook Ad management is one of our specialties at Guacamaya
            Social Media. We can within Ad Manager and the Power Editor to
            oversee your ad campaigns from start to finish. We'll help you
            refine your target audiences, select the right Facebook ad
            formats, allocate spend strategically across your other channels
            and measure the performance of your paid social campaigns.
          </Text>
          <Box bg="brand.400" color="white" p={3} borderRadius="md" mb={8}>
            INCLUDED: DESINGS / PHOTOSHOOT / CONTENT CRERATING / POSTING /
            SOCIAL MEDIA AD MANAGEMENT / CAMPAIGN FOLLOW-UP / $400 BUDGET
            FOR INVESTMENTS ADS
          </Box>
        </Box>

        <Box my={12}>
          <Heading size="xl" mb={4} fontWeight="extrabold">
            Why get Full Guacamaya Social Media Ad Management ?
          </Heading>
          <Box ml={4}>
            <Text mb={4}>
              <Text as="span" fontWeight="bold" fontSize="xl">We Target Your Exact Audience</Text>
            </Text>
            <Text mb={4}>
              <Text as="span" fontWeight="bold" fontSize="xl">We Create Ads Catering to Your Specific Objective</Text>
            </Text>
            <Text mb={4}>
              <Text as="span" fontWeight="bold" fontSize="xl">We make you Reach Far More People Than You Ever Will With Organic Posts</Text>
            </Text>
          </Box>
        </Box>

        <Center mt={8}>
          <CTAGroup reference="Desde la pagina de management" />
        </Center>
      </Box>
    </MainLayout>
  );
};

export default Page; 