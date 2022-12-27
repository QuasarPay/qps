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
  initialColorMode: 'dark',
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
        Button: { baseStyle: {_focus: { boxShadow: 'none'}}}       
    },
    styles:{
        global: {
            'html, body': {
                bg: 'gray.200'
            }
        }
    }
    
})

export default theme