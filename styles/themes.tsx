import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/mulish";

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  }
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}
const theme = extendTheme({
    config,
    fonts: {
        heading: 'Mulish',
        body: 'Mulish',

    },
    breakpoints,
    components: {
        Button: { baseStyle: {_focus: { boxShadow: 'none'}}},
    },
    styles:{
        global: {
            'html, body': {
                bg: 'gray.200',
                color: '#10151D',
            },

        }
    },
    textStyles: {
        h1: {
          // you can also use responsive styles
          fontSize: '3rem',
          fontWeight: 'bold',
          lineHeight: '110%',
          letterSpacing: '-2%',
          _selection:{
            background: '#474747',
            color: '#FFFFFF'
          }
        },
        h2: {
          fontSize: ['36px', '48px'],
          fontWeight: 'semibold',
          lineHeight: '110%',
          letterSpacing: '-1%',
          _selection:{
            background: '#474747',
            color: '#FFFFFF'
          }
        },
        text: {
          _selection:{
            background: '#25002F',
            color: '#FFFFFF'
          }
        }
      },
    
})

export default theme