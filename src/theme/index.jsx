import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '::selection': {
        backgroundColor: '#08465e',
        color: '#fafafa',
      },
      /* For Firefox */
      '::-moz-selection': {
        backgroundColor: '#08465e',
        color: '#fafafa',
      },
      body: {
        backgroundColor: '#fafafa',
      },
    },
  },
  colors: {
    primary: {
      50: '#d5f2ff',
      100: '#b2dbf0',
      200: '#93bfd8',
      300: '#70a4c0',
      400: '#5690ad',
      500: '#387c9c',
      600: '#2a6d8a',
      700: '#1a5974',
      800: '#08465e',
      900: '#003146',
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
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
});

export default theme;
