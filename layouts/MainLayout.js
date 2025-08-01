import { Header } from '@/components/Header/Header.component';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../lib/theme';
import { Footer } from '@/components/Header/Footer.component';

export const MainLayout = ({ children, meta = {} }) => {
  return (
    <>
      <Head>
        <title>{meta.title} | Guacamaya Social Media</title>
        <meta
          name="description"
          content={meta.description || 'Guacamaya social media'}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      {/* Chakra UI ColorModeScript para SSR */}
      <ColorModeScript initialColorMode={theme.config?.initialColorMode || 'light'} />
      {/* Chat de Facebook eliminado para evitar errores de hidratación */}
      <Header />
      <Box
        minH="100vh"
        className='bg-cool'
        pb={0}
      >
        {children}
        <Footer />
      </Box>
    </>
  );
}
