import styles from '@styles/navigation/sidebar/sidebar.module.scss'
import { memo } from 'react'
import { LogoComponent } from '../../common/LogoComponent'
import { AchievementsComponent } from '../../statistic/AchievementsComponent'
import { SideBarItems } from './SideBarItems'

export const SideBar = (): JSX.Element => {
    return (
        <div className={styles.main}>
            <LogoComponent />
            <SideBarItems />
            <AchievementsComponent />
        </div>
    )
}
