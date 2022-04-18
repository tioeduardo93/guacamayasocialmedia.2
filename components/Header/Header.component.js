import { useWindowsSize } from '@/hooks/useWindowSize';
import { links } from '@/lib/constants';
import { Button, chakra, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Square, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { useRef } from 'react';
import { BiMenu } from 'react-icons/bi';

export const Header = () => {
  const { width } = useWindowsSize();

  return (
    <chakra.div bg="primary" px={8}>
      <chakra.header justifyContent={'space-between'} display={'flex'} bg="primary" py={2} maxW="1280px" mx="auto">
        <div>
          <chakra.img height={'50px'} src="/logo.png" alt="" />
        </div>
        {
          width > 1024 ? (
        <HStack spacing={4}>
          {
            links.map(({href, text, type}, index) => (
              <Link href={href} key={`link-${index}`} passHref>
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
            ))
          }
        </HStack>
          ) : (
            <MobileMenu />
          )
        }
      </chakra.header>
    </chakra.div>
  );
};

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Square ref={btnRef} onClick={onOpen} id="menu-burger-button" fontSize={32} color="white">
        <BiMenu />
      </Square>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
          {
            links.map(({href, text}, index) => (
              <Link href={href} key={`link-${index}`} passHref>
                <chakra.a
                  display="block"
                  w="100%"
                  mb={4}
                  textAlign="center"
                  bg="primary"
                  color="white"
                  py={4}
                  rounded="md"
                >
                  {text}
                </chakra.a>
              </Link>
            ))
          }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
