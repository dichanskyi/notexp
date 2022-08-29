import styles from '@styles/brand/logo_component.module.scss'
import { memo } from 'react'
import { PROJECT_NAME } from '../../constants/general'

export const LogoComponent = memo((): JSX.Element => {
    return <span className={styles.logo_main}>✏️ {PROJECT_NAME}</span>
})
