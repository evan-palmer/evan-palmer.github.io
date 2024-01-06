import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '::selection': {
        backgroundColor: '#174a7f',
        color: '#fafafa',
      },
      /* For Firefox */
      '::-moz-selection': {
        backgroundColor: '#174a7f',
        color: '#fafafa',
      },
      body: {
        backgroundColor: '#fafafa',
      },
    },
  },
  colors: {
    primary: {
      50: '#e5e9ef',
      100: '#bdc9da',
      200: '#93a6c0',
      300: '#6983a7',
      400: '#476996',
      500: '#1f5188',
      600: '#174a7f',
      700: '#0b4074',
      800: '#043768',
      900: '#002750',
    },
    secondary: {
      50: '#ffe7c1',
      100: '#e9c59f',
      200: '#c9a179',
      300: '#a77f52',
      400: '#8e6535',
      500: '#754c16',
      600: '#6b4311',
      700: '#5c3708',
      800: '#502900',
      900: '#421b00',
    },
    analogous: {
      50: '#def4f6',
      100: '#ade4e9',
      200: '#79d3db',
      300: '#44c0cd',
      400: '#19b4c3',
      500: '#00a8ba',
      600: '#0099a8',
      700: '#008590',
      800: '#007179',
      900: '#004f50',
    },
    triadic: {
      50: '#f4dfe5',
      100: '#e5afbe',
      200: '#d37d94',
      300: '#c24c6d',
      400: '#b42952',
      500: '#a80039',
      600: '#9a0037',
      700: '#870034',
      800: '#73002f',
      900: '#500027',
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
