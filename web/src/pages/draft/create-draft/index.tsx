import { StylesContext } from '@material-ui/styles'
import type { NextPage } from 'next'
import { MainLayout } from '../../../components/common/MainLayout'
import { ContentGridLarge } from '../../../components/grids/contentGrid/ContentGridLarge'
import { CreateDraft } from '../../../components/draft/create-draft/CreateDraft'

import styles from '@styles/draft/create-draft/create-draft.module.scss'

const HomePage: NextPage = () => {
    return (
        <MainLayout title="Create Draft">
            <div>
                <main className={styles.main}>
                    <h1> Create your draft here</h1>
                    <CreateDraft />
                </main>

                <footer></footer>
            </div>
        </MainLayout>
    )
}

export default HomePage
