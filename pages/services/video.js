import { MainLayout } from "@/layouts/MainLayout";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Badge,
  Flex,
  Divider,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { CTAGroup } from "@/components/CTAGroup/CTAGroup.component";


export const Stat = (props) => {
  const { title, value, children, accentColor, ...rest } = props
  return (
    <Box {...rest}>
      <Flex as="dl" direction="column-reverse">
        <Box as="dt" fontWeight="bold">
          {title}
        </Box>
        <Box
          order={1}
          as="dd"
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight="extrabold"
          color={accentColor}
        >
          {value}
        </Box>
      </Flex>
      <Divider aria-hidden my="4" borderWidth="2px" borderColor={accentColor} />
      <Box color={useColorModeValue('gray.600', 'whiteAlpha.700')} fontWeight="medium">
        {children}
      </Box>
    </Box>
  )
}


const Page = () => {
  return (
    <MainLayout>
      <img src="/diseno/servicios/banners/video_commercials.jpg" alt="" />
      <Box p={4} mt={8} bg="white"
    maxW="7xl"
    mx="auto"
    px={{ base: '6', md: '8' }}
    spacing="12"
      >
  <Stack
    as="section"
  >
      <Heading textAlign={'center'} size="2xl" fontWeight="extrabold">
        Guacamaya video advertisement
      </Heading>
      <Text
        py={8}
        textAlign={'center'}
        fontSize="lg"
        fontWeight="medium"
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      >
            A Guacamaya video advertisement, like those you see on TV or the
            Internet, is a short video (60 seconds or less, but ideally 30
            seconds) branding-oriented that promotes your company, product or
            service.
      </Text>
    <Text mt={8}>According to research:</Text>
    <SimpleGrid mx="auto" spacing={{ base: '10', md: '20' }} columns={{ base: 1, md: 3 }}>
      <Stat
        title="More time on your website"
        value="88%"
        accentColor={useColorModeValue('green.500', 'green.300')}
      >
        Users spend 88% more time on a website that has video.
      </Stat>
      <Stat
        title="More shares"
        value="1200%"
        accentColor={useColorModeValue('blue.500', 'blue.300')}
      >
        Video generates 1200% more shares than both images and text.
      </Stat>
      <Stat
        title="More Engagement"
        value="< 2min"
        accentColor={useColorModeValue('pink.500', 'pink.300')}
      >
          Videos less than 2 minutes long receive the most engagement.
      </Stat>
    </SimpleGrid>
  </Stack>
          <SimpleGrid my={'10%'} columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontSize="2xl" fontWeight={600}>
                  Corporative Guacamaya Video
                </Text>
                <Text color={"gray.600"}>
                  This is the type of video that everyone uses, Guacamaya Social
                  Media is in charge of filming everything your business has to
                  offer and presenting it to your audience as the most
                  effective, unique, and necessary services that they will need.
                </Text>
                <Badge colorScheme="brand">
                  Included: Script / Filming / Editing
                </Badge>
              </VStack>
            </HStack>

            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontSize="2xl" fontWeight={600}>
                  Speaker Guacamaya Video
                </Text>
                <Text color={"gray.600"}>
                  Probably the type of business you have is best sold with a
                  face that represents it, even that face can be yourself, this
                  type of video is recommended for realtors, attorneys, Doctors,
                  tax preparers, people who offer their knowledge as part of
                  their marketing strategy
                </Text>
                <Badge colorScheme="brand">
                  Included: Script / Filming / Editing / Speaking Tips
                </Badge>
              </VStack>
            </HStack>

            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontSize="2xl" fontWeight={600}>
                  Creative Guacamaya Video
                </Text>
                <Text color={"gray.600"}>
                  The most creative and sassy videos will be the champions.
                  <br />
                  That is why at Guacamaya Social Media we bet 100% on creative
                  videos that break with the daily rules of advertising.
                  <br />
                  Come on! Nobody likes to watch repeated videos, nobody cares
                  to see the same old commercials.
                  <br />
                  In Guacamaya we study the videos that go viral and we are not
                  afraid of being different because we know that to have real
                  changes we must fly differently.
                </Text>
                <Badge colorScheme="brand">
                  Included: Script / Filming / Editing / Speaking Tips
                </Badge>
              </VStack>
            </HStack>
          </SimpleGrid>

    <Box as="section" py="5%">
      <Stack
        spacing="6"
        direction={{ base: 'column', md: 'row' }}
        align={{ md: 'center' }}
        justify="space-between"
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <Box>
          <Text mb="2" fontSize="lg" fontWeight="semibold" color={'gray.600'}>
            Effective, accurate and unique
          </Text>
          <Heading size="xl" fontWeight="extrabold" maxW="20ch">
            The most creative and sassy videos will be the champions
          </Heading>
        </Box>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '2', sm: '4' }}>
            <CTAGroup reference="desde la pagina de servicios de video" />
        </Stack>
      </Stack>
    </Box>
      </Box>
    </MainLayout>
  );
};

export default Page;
