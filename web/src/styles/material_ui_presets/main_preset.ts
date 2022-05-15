import { createTheme } from '@material-ui/core/styles'

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string
        }
    }
    interface ThemeOptions {
        status?: {
            danger?: string
        }
    }
}

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#49ae92',
        },
        secondary: {
            main: '#131039',
        },
        info: {
            main: '#49AE92',
        },
    },
})
