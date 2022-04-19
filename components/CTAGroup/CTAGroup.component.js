import { Button, Flex } from "@chakra-ui/react";

export const CTAGroup = () => {
  return (
    <Flex
      flexDir={{
        base: "column",
        md: "row",
      }}
    >
      <Button
        w={{
          base: "100%",
          md: "200px",
        }}
        rounded="full"
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
      <Button
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
    </Flex>
  );
};
