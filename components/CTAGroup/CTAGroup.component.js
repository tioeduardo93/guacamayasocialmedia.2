import { Button, Flex } from "@chakra-ui/react";

export const CTAGroup = () => {
  return (
    <Flex flexDir={{
      base: 'column',
      md: 'row',
    }}
    >
      <Button mb={4} mr={{
        base: 0,
        md: 4,
      }} display={'block'} w="100%" colorScheme={'brand'}>call to action</Button>
      <Button mb={4} display={'block'} w="100%" colorScheme={'brand'} variant="outline">call to action 2</Button>
    </Flex>
  );
};
