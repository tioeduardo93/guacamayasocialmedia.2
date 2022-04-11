import { Button, Center, chakra } from '@chakra-ui/react';
import { BiPlay } from 'react-icons/bi';

export const MainVideo = () => {
  return (
    <Center
      bgImage={'/main-hero.jpg'}
      height={'830px'}
    >
      <Button transform={'scale(1.4)'} size="lg" py={8} rounded="full">
        <BiPlay />
      </Button>
    </Center>
  );
};
