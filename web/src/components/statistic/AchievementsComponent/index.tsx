import styles from '../../../styles/statistic/achievements_component.module.scss'
import { AchievementProgress } from './AchievementProgress'

export const AchievementsComponent = (): JSX.Element => {
    return (
        <div className={styles.main}>
            <h1 className={styles.character_window}> Your character</h1>
            <AchievementProgress progressValue={80} />
        </div>
    )
}
