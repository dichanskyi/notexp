import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core'
import { mainTheme } from '../../styles/material_ui_presets/main_preset'
import { PROJECT_NAME } from '../../constants/general'
import { SideBar } from '../navigation/SideBar'

interface MainLayoutProps {
    children: JSX.Element
    title: string
}

export const MainLayout = ({ children, title = 'Next' }: MainLayoutProps) => {
    return (
        <>
            <MuiThemeProvider theme={mainTheme}>
                <Head>
                    <title>
                        ✏️ {PROJECT_NAME} | {title}
                    </title>
                </Head>
                <SideBar />

                <main>{children}</main>
            </MuiThemeProvider>
        </>
    )
}