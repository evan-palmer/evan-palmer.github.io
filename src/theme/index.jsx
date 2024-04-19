import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '::selection': {
        backgroundColor: '#295a6d',
        color: '#fffcf7',
      },
      /* For Firefox */
      '::-moz-selection': {
        backgroundColor: '#295a6d',
        color: '#fffcf7',
      },
      body: {
        backgroundColor: '#fffcf7',
      },
    },
  },
  colors: {
    primary: {
      50: '#dbf2ff',
      100: '#badae8',
      200: '#9bbfd1',
      300: '#79a4b9',
      400: '#5f90a6',
      500: '#447d94',
      600: '#376e83',
      700: '#295a6d',
      800: '#1c4758',
      900: '#083240',
    },
    secondary: {
      50: '#ffe2c7',
      100: '#f7c1a9',
      200: '#d99e86',
      300: '#b97b60',
      400: '#a26045',
      500: '#8a472a',
      600: '#7e3e24',
      700: '#6e321c',
      800: '#5f2416',
      900: '#4f160c',
    },
    analogous: {
      50: '#e1f2f0',
      100: '#b5dfd8',
      200: '#87ccc0',
      300: '#5bb7a7',
      400: '#3ea795',
      500: '#2e9783',
      600: '#2a8a77',
      700: '#257a67',
      800: '#216a59',
      900: '#194e3e',
    },
    triadic: {
      50: '#ece7f3',
      100: '#cfc4e2',
      200: '#b09dd0',
      300: '#9275bd',
      400: '#7b58af',
      500: '#653da2',
      600: '#5d389c',
      700: '#513093',
      800: '#472a8a',
      900: '#361f7a',
    },
    greyscale: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    tan: {
      50: 'fffcf7',
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
});

export default theme;
