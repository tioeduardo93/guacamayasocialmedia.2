import { Title } from "@/components/Title/Title.component";
import { MainLayout } from "@/layouts/MainLayout";
import { Button, Container, Text, chakra, Center } from "@chakra-ui/react";

export default function Donate() {
  return (
    <MainLayout>
      <Container maxW={'1280px'} mt={12}>
        <Title mb={4}>Donate!</Title>
        <Text textAlign={'center'} mb={2}>
          Guacamaya is an idea brought from Venezuela and made reality in the United States, it is no coincidence that the macaw (Guacamaya) is one of the most seen birds in the capital of Venezuela.
        </Text>
        <Text textAlign={'center'} mb={2}>
          To reward everything that Venezuela did for us we have created this small window of help, in Venezuela there are many children who do not have access to education, decent clothes or good quality food, that is why we created a small educational cafeteria, the children can go to eat and learn finances, mathematics, to read and write, because in Guacamaya we believe that a being without studies is an incomplete being.
        </Text>
        <Text textAlign={'center'} mb={2}>
          Help us give them a better education, enter the link and donate what God puts in your heart, they will thank you.
        </Text>

          <Center mt={8}>

        <chakra.a
          href="https://gofund.me/62854c83"
          target={'_blank'}
          rel={'noopener noreferrer'}
          color={'primary'}
        >
        <Button px={8} colorScheme={'brand'}>
          Donate
        </Button>
        </chakra.a>
          </Center>
      </Container>
    </MainLayout>
  );
};
