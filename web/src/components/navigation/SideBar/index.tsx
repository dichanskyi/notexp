import styles from '@styles/navigation/sidebar/sidebar.module.scss'
import { LogoComponent } from '../../common/LogoComponent'
import { SideBarItems } from './SideBarItems'

export const SideBar = (): JSX.Element => {
    return (
        <div className={styles.main}>
            <LogoComponent />
            <SideBarItems />
        </div>
    )
}
