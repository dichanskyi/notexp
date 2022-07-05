import type { NextPage } from 'next'
import { MainLayout } from '../../../components/common/MainLayout'

import styles from '@styles/draft/create-draft/create-draft.module.scss'
import { Button } from '@material-ui/core'
import CreateIcon from '@mui/icons-material/Create'
import { useRouter } from 'next/router'
import { pushNamed } from '../../../router/router'

const HomePage: NextPage = () => {
    const router = useRouter()

    return (
        <MainLayout title="Your Notes">
            <div>
                <main className={styles.main}>
                    <div>
                        <h1> My library of Notes:</h1>
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<CreateIcon />}
                            onClick={() => router.push(pushNamed('create-draft'))}
                        >
                            Create a Note
                        </Button>
                    </div>
                </main>

                <footer></footer>
            </div>
        </MainLayout>
    )
}

export default HomePage
