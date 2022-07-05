import type { NextPage } from 'next'
import { MainLayout } from '../../components/common/MainLayout'
import styles from '@styles/home/home.module.scss'

const OnboardingPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}></main>
            <footer className={styles.footer}></footer>
        </div>
    )
}

export default OnboardingPage
