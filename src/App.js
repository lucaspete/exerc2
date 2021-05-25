import { useState } from 'react'
import Formulario from './formulario'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { dark, light} from './temas'

const App = () => {

    const [ now, setTema ] = useState( light )
    const [ claro, setlight ] = useState( true )

    const change = () => {
        if (claro) 
            setTema( dark )
        else
            setTema( light )
        setlight( !claro )
    }

    return (
        <ThemeProvider theme={ now }>
            <CssBaseline />
            <Formulario now={ change }/>            
        </ThemeProvider>
    )
}

export default App