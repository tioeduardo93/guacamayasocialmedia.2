import { Title } from "@/components/Title/Title.component";
import {
  Box,
  Button,
  Container,
  chakra,
  Input,
  Text,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";

export const CTA = () => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const htmlBody = `
      ref: desde la pagina de inicio de la web
      <h4>Esta persona desea recibir promos de guacamaya</h4>
      <p>email: ${value}</p>
    `;

    try {
      await fetch("/api/gtm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formData.email,
          message: htmlBody,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      toast({
        title: "thanks!",
        description: "We'll be in touch soon!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      setShowModal(false);
    }
  };

  return (
    <Box as="section" bg="bg-surface">
      <Container
        py={{
          base: "16",
          md: "24",
        }}
      >
        <Title>Get Better Work Done</Title>
        <Text my={4} color="muted" maxW="2xl" textAlign="center" fontSize="lg">
          With this beautiful and responsive React components you will realize
          your next project in no time.
        </Text>
        <chakra.form display="flex" onSubmit={handleSubmit}>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="email"
            pr="2rem"
            placeholder="email@example.com"
            bg="white"
          />
          <Button ml={"-2rem"} px={8} colorScheme={"brand"} rounded="full">
            Get on board
          </Button>
        </chakra.form>
      </Container>
    </Box>
  );
};
