import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      // main: '#2e87eb',
      main: '#4caf50',
      light: '#BBE1FA',
      dark: '#1B262C',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
