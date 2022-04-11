import { chakra, Box, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import { Title } from '@/components/Title/Title.component';


const LogoItem = ({ src }) => {
  return (
    <Box
      transform={'scale(0.8)'}
      filter={'grayscale(100%)'}
      _hover={{
        filter: 'grayscale(0%)',
      }}
    >
      <Image src={src} alt="" width={170} height={170} />
    </Box>
  )
}

export const PeopleWhoTrustUs = () => {
  return (
    <chakra.div
      background={'white'}
    >
    <chakra.section
      p={8}
      id="peoplewhotrustus"
      maxW="1280px"
      mx="auto"
    >
      <Title pb={4} as="h2">
        People Who Trust Us
      </Title>
      <Grid
        templateColumns={{
          base: '1fr 1fr 1fr',
          lg: 'repeat(6, 1fr)',
        }}
        justifyItems="center"
        gap={4}
      >
        <LogoItem src="/logos_clientes/1.png" />
        <LogoItem src="/logos_clientes/2.png" />
        <LogoItem src="/logos_clientes/3.png" />
        <LogoItem src="/logos_clientes/4.png" />
        <LogoItem src="/logos_clientes/5.png" />
        <LogoItem src="/logos_clientes/6.png" />
        <LogoItem src="/logos_clientes/7.png" />
        <LogoItem src="/logos_clientes/8.png" />
        <LogoItem src="/logos_clientes/9.png" />
        <LogoItem src="/logos_clientes/10.png" />
        <LogoItem src="/logos_clientes/11.png" />
        <LogoItem src="/logos_clientes/12.png" />
      </Grid>
    </chakra.section>
    </chakra.div>
  )
}
