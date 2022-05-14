import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainLayout } from '../../components/common/MainLayout'
import styles from '@styles/home/home.module.scss'

const HomePage: NextPage = () => {
    return (
        <MainLayout title="Home">
            <div className={styles.container}>
                <main className={styles.main}>
                    <span>Home</span>
                </main>

                <footer className={styles.footer}></footer>
            </div>
        </MainLayout>
    )
}

export default HomePage
