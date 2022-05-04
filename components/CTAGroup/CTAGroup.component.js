import { useWindowsSize } from "@/hooks/useWindowSize";
import { chakra, Box, Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";

export const CTAGroup = ({ reference }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reference: reference || "desde la web",
  });
  const [showModal, setShowModal] = useState(false);
  const { width } = useWindowsSize();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const htmlBody = `
      <h1>Contacto desde la web (https://guacamayasocialmedia.com)</h1>
      <p>Ref: ${formData.reference}</p>
      <p>Nombre: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Teléfono: ${formData.phone}</p>
      <p>Mensaje: ${formData.message}</p>
    `;
    try {
      await fetch('/api/gtm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: formData.email,
          message: htmlBody,
        }),
      })
    } catch (error) {
      console.log(error);
    } finally {
      toast({
        title: "thanks!",
        description: "We'll be in touch soon!",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      setShowModal(false);
    }
  };

  const handleChatWithUs = () => {
    setShowModal(true);
  };

  const handleBookNow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Box
        onClick={(e) => {
          if (e.target.id === "modal-container") {
            setShowModal(false);
          }
        }}
        id="modal-container"
        display={showModal ? "flex" : "none"}
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
        position="fixed"
        zIndex="99"
        top="0"
        left="0"
        bg="rgba(250,100,209,0.9)"
        className="slideIn"
      >
        <chakra.form
          onSubmit={handleSubmit}
          css={`
            input {
              margin-bottom: 1rem;
            }
          `}
          w="100%"
          maxW="700px"
          bg="white"
          rounded="md"
          p={5}
          shadow="md"
        >
          <Heading textAlign="center" mb={4}>
            Lets get in touch
          </Heading>
          <chakra.label mb={2} fontWeight="bold" display="block" htmlFor="name">
            Name{" "}
            <chakra.span color="#535353" fontSize="sm">
              (required)
            </chakra.span>
          </chakra.label>
          <Input
            value={formData.name}
            required
            name="name"
            type="text"
            placeholder="name"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <chakra.label
            mb={2}
            fontWeight="bold"
            display="block"
            htmlFor="email"
          >
            Email{" "}
            <chakra.span color="#535353" fontSize="sm">
              (required)
            </chakra.span>
          </chakra.label>
          <Input
            value={formData.email}
            required
            name="email"
            type="email"
            placeholder="email"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <chakra.label
            mb={2}
            fontWeight="bold"
            display="block"
            htmlFor="phone"
          >
            Phone{" "}
            <chakra.span color="#535353" fontSize="sm">
              (required)
            </chakra.span>
          </chakra.label>
          <Input
            value={formData.phone}
            required
            name="phone"
            type="tel"
            placeholder="phone"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <chakra.label mb={2} fontWeight="bold" display="block" htmlFor="name">
            Message{" "}
            <chakra.span color="#535353" fontSize="sm">
              (optional)
            </chakra.span>
          </chakra.label>
          <Input
            value={formData.message}
            name="message"
            placeholder="message"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <Button
            type="submit"
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.phone ||
              !formData.message
            }
            w="100%"
            mt={4}
            colorScheme="brand"
            onClick={() => setShowModal(true)}
          >
            Send
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(false);
            }}
            variant={"ghost"}
            textDecor="underline"
            textAlign="center"
            w="100%"
            fontSize="sm"
          >
            Go Back
          </Button>
        </chakra.form>
      </Box>
      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Button
          onClick={handleChatWithUs}
          w={{
            base: "100%",
            md: "200px",
          }}
          rounded="full"
          id="cta-link"
          mb={4}
          mr={{
            base: 0,
            md: 4,
          }}
          display={"block"}
          colorScheme={"brand"}
        >
          Chat With Us
        </Button>
        {width > 1024 ? (
          <Button
            onClick={handleBookNow}
            rounded="full"
            bg="white"
            w={{
              base: "100%",
              md: "200px",
            }}
            mb={4}
            display={"block"}
            colorScheme={"brand"}
            variant="outline"
          >
            Book Now
          </Button>
        ) : (
          <Button
            as="a"
            href="tel:+12404490346"
            rounded="full"
            bg="white"
            w={{
              base: "100%",
              md: "200px",
            }}
            mb={4}
            display={"block"}
            colorScheme={"brand"}
            variant="outline"
          >
            Book Now
          </Button>
        )}
      </Flex>
    </>
  );
};
