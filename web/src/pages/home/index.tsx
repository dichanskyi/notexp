import type { NextPage } from 'next'
import { MainLayout } from '../../components/common/MainLayout'
import styles from '@styles/home/home.module.scss'
import { ContentGridLarge } from '../../components/grids/contentGrid/ContentGridLarge'
import { TopBar } from '../../components/navigation/TopBar'

const HomePage: NextPage = () => {
    return (
        <MainLayout title="🏠 Home">
            <div className={styles.container}>
                <main className={styles.main}>
                    <ContentGridLarge content={[]} />
                </main>

                <footer className={styles.footer}></footer>
            </div>
        </MainLayout>
    )
}

export default HomePage
