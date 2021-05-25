import { createMuiTheme } from '@material-ui/core/styles'

const dark = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#708090',
        },
        background: {
          default: '#1C1C1C',
          paper: '#1C1C1C',
        },
      },
}))

const light = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#5CB043',
        },
        background: {
          default: '#5CB043',
          paper: '#FADB45',
        },
      },    

}))



export { dark, light }