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
      <img src="/diseno/servicios/banners/influencers.jpg" alt="" />
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
          Do you need a model / Actor / Promoter that shows how your service
          or product really works on real people?
        </Heading>
        <Center mt={6}>
          <CTAGroup reference="Desde la pagina de promoters" />
        </Center>
        <Text
          py={8}
          textAlign={"center"}
          fontSize="lg"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "whiteAlpha.700")}
        >
          Guacanmaya has built the most reliable network of actors and
          promoters in the DMV area, with models, actors and promoters who
          have had experience in traditional media and who are even known by the
          audience in the area, from Models to renowned promoters Guacamaya
          will make the perfect cast for your BUSINESS.
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
              Models
            </Heading>
            <Text>
              The model usually does not speak in the videos, only lends his
              image as part of the corporate commercial photography and video
              service
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
              Actors
            </Heading>
            <Text>
              The actor can recommend your brand or product and explain how it
              works, Use the product to show how it works and can also be part
              of creative videos that represent situations that engage people.
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
              Micro Promoters
            </Heading>
            <Text>
              The biggest advantage about promoters is that they are known by
              the audience and that they can be ambassadors of your business
              creating trust in the buyer (You are more likely to buy if a
              friend recommends you buy)
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
              Macro Promoters
            </Heading>
            <Text>
              A big promoter will bring you more sales and more customer
              loyalty
            </Text>
          </Box>
        </Grid>

        <Text textAlign="center" fontSize="2xl">
          Consult today and find out what type of promoter is best for your
          company.
        </Text>

        <Center mt={8}>
          <CTAGroup reference="Desde la pagina de promoters" />
        </Center>
      </Box>
    </MainLayout>
  );
};

export default Page;
