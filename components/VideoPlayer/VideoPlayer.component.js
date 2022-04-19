import React, { useEffect, useRef } from "react";
import { Center, Circle, useDisclosure } from "@chakra-ui/react";
import { BiPlay } from "react-icons/bi";

export const VideoPlayer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef(null);


  const handleOpen = () => {
    onOpen();
  }

  useEffect(() => {
      if (ref?.current?.volume) {
          console.log('this runs')
        ref.current.volume = 0.1
      }
      console.log(ref.current)
  }, [ref])

  const handleClose = () => {
      onClose();
      ref.current.pause();
  }

  return (
    <>
      <Circle
        position={"absolute"}
        zIndex={4}
        top={{
          base: '0',
          lg: "50%"
        }}
        left={{
          base: "50%",
          lg: "auto",
        }}
        transform={"translate(-50%)"}
        bg="primary"
        color="white"
        size="20"
        fontSize={"32px"}
        transition="all .4s ease"
        cursor={"pointer"}
        onClick={handleOpen}
        _hover={{
          transform: "scale(1.1) translate(-45%)",
        }}
      >
        <BiPlay />
      </Circle>
        <Center
            display={isOpen ? 'flex' : 'none'}
          id="video-shadow"
          position={"fixed"}
          zIndex="12"
          height={"100vh"}
          width="100%"
          top="0"
          left="0"
          backgroundColor={"rgba(0,0,0,.8)"}
          color="white"
          onClick={(e) => {
            e.stopPropagation();
            if (e.target.id === "video-shadow") {
                handleClose()
            }
          }}
          p={"15%"}
        >
          <video controls width="100%" ref={ref}>
            <source src="/diseno/video/promo.mp4" type="video/mp4" />
            Sorry, your browser doesn&apos;t support embedded videos.
          </video>
        </Center>
    </>
  );
};
