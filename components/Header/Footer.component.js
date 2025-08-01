import { links } from '@/lib/constants';
import { Box, chakra, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CTAGroup } from '../CTAGroup/CTAGroup.component';

export const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    setIsClient(true);
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Renderizar un estado simple en el servidor
  if (!isClient) {
    return (
      <chakra.footer bg="primary" px={8} py={4}>
        <chakra.div justifyContent={'space-between'} display={'flex'} alignItems="center" maxW="1280px" mx="auto">
          <Link href={'/'} passHref>
            <chakra.img cursor={'pointer'} height={'50px'} src="/logo.png" alt="" />
          </Link>
        </chakra.div>
      </chakra.footer>
    );
  }

  return (
    <chakra.footer bg="primary" px={8} py={4}>
      <chakra.div justifyContent={'space-between'} display={'flex'} alignItems="center" maxW="1280px" mx="auto">
        <Link href={'/'} passHref>
          <chakra.img cursor={'pointer'} height={'50px'} src="/logo.png" alt="" />
        </Link>
        {width > 1024 ? (
          <HStack spacing={4}>
            {links.map(({ href, text, type }, index) => (
              <Link href={href} key={`footer-link-${index}`} passHref>
                <chakra.a
                  bg={type === 'button' ? 'white' : 'transparent'}
                  color={type === 'button' ? 'primary' : 'white'}
                  px={type === 'button' ? 6 : 0}
                  py={type === 'button' ? 1 : 0}
                  rounded={type === 'button' ? 'full' : 0}
                  border={type === 'button' ? '1px solid white' : 0}
                  _hover={type === 'button' ? {
                    transform: 'scale(1.1)',
                  } : {
                    bg: 'transparent',
                    textDecor: 'underline',
                  }}
                >
                  {text}
                </chakra.a>
              </Link>
            ))}
            <Box>
              <CTAGroup reference="Desde el footer de la web" />
            </Box>
          </HStack>
        ) : null}
      </chakra.div>
    </chakra.footer>
  );
}; 