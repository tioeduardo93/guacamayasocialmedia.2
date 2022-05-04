/* eslint-disable react/no-unescaped-entities */
import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";
import { MainLayout } from "@/layouts/MainLayout";
import { Box, Center, Heading, Text, useColorModeValue } from "@chakra-ui/react";

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
        <Text
          py={8}
          textAlign={"center"}
          fontSize="lg"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "whiteAlpha.700")}
        >
          A Lead generation services provider manages campaigns to discover and
          qualify customers for businesses, also known as leads. These services
          can be highly beneficial in filling an organization’s sales pipeline
          with potential clients; providers can also assist with establishing
          initial communications and building interest in the brand (demand
          generation). A number of these providers will assist with follow-up
          campaigns and other "lead nurturing" to ensure the best possible
          conversion rate.
        </Text>
        <Text
            textAlign="center"
            fontSize="2xl"
        >
            In Simple words, we are going to  pre-sell to your clients.
        </Text>
        <Center mt={8}>
            <CTAGroup reference="Desde la pagina de lead generation" />
        </Center>
      </Box>
    </MainLayout>
  );
};

export default Page;
