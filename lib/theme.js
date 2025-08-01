import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      400: '#EB3663',
      500: '#E82943',
      600: '#D81932',
      700: '#B80A1F',
      800: '#9F0A1F',
      900: '#7F0A1F',
    },
    primary: "#EB3663",
  },
  global: {
    body: {
      fontFamily: 'font-family: "Roboto", sans-serif;',
    }
  }
});

export default theme; 