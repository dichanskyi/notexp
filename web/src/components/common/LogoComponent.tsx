import styles from '@styles/logo_component.module.scss'
import { PROJECT_NAME } from '../../constants/general'

export const LogoComponent = (): JSX.Element => {
    return <span className={styles.logo_main}>✏️ {PROJECT_NAME}</span>
}
