import {
  Box,
  chakra,
  Container,
  Flex,
  Grid,
  Icon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { MainLayout } from "@/layouts/MainLayout";
import { AboutUs } from "@/sections/home/AboutUs";
import { BiUser } from "react-icons/bi";

function Card({ image, title, description, charge }) {
  return (
    <Grid
      bg="white"
      shadow={"sm"}
      rounded="lg"
      overflow="hidden"
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <Image
        w="full"
        h={"290px"}
        fit="cover"
        src={image || "https://via.placeholder.com/240x240"}
        alt="avatar"
      />
      <div>
        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon as={BiUser} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            {charge}
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            {title}
          </chakra.h1>

          <chakra.p
            fontSize={"sm"}
            py={2}
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {description}
          </chakra.p>
        </Box>
      </div>
    </Grid>
  );
}

export default function AboutUsPage() {
  return (
    <MainLayout>
      <AboutUs.AboutUs />
      <Container maxW={"1280px"}>
        <Grid
          mb={12}
          gap="1rem"
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
        >
          <Card
            image="/equipo/athina.jpg"
            charge={"Video Editor"}
            title="Athina Lohmann"
            description={
              "Athina is a fan of Harry Potter, kiss and hamburgers, studied journalism and has a great experience in content production and advertising but her greatest skill is that she is an amazing video editor."
            }
          />
          <Card
            image="/equipo/dani.jpg"
            charge={"Designer / Video Editor"}
            title="Dani Colina"
            description={
              "Daniela is a designer and editor hungry for success, every day she is thinking about how to do her job better, she has experience as a producer in traditional media and is happily in love with her girlfriend."
            }
          />
          <Card
            image="/equipo/eli.jpg"
            charge={"Marketing Planner"}
            title="Elizabeth Pinto"
            description={
              "She rocks even when she is working, football soccer lover, sasy and our great planner, she is going to be in touch with you to answer all your questions and cover your business  marketing necessities."
            }
          />
          <Card
            image="/equipo/leo.jpg"
            charge={"Content Manager / Filmmaker"}
            title="Leonardo Angulo"
            description={
              "Gamer, marvelita (Marvel super heroes fan) and young father which make him to connect with the new generation of buyers more easily, he is addicted to marketing, business and sales subjects, he studied higher education in Venezuela, more than 10 years in radio as a producer, announcer and broadcaster, agency marketing master, and early morning skater."
            }
          />
          <Card
            image="/public/equipo/eduardo.jpg"
            charge={"Programmer / Web Designer"}
            title="Eduardo Cebrián"
            description={
              "Passionate about Legos and a Star Wars fan, Eduardo is a talented front-end programmer who is dedicated to creating unique and creative websites. His attention to detail is simply unsurpassed, and he is able to achieve wonders while enjoying a box of Chocolate Flips (highly addictive Venezuelan cereal)."
            }
          />
        </Grid>
      </Container>
    </MainLayout>
  );
}
