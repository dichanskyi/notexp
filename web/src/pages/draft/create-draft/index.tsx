import type { NextPage } from 'next'
import { MainLayout } from '../../../components/common/MainLayout'
import { CreateDraft } from '../../../components/draft/create-draft/CreateDraft'

import styles from '@styles/draft/create-draft/create-draft.module.scss'
import { Button } from '@material-ui/core'
import { TextTag } from '@components/common/tags/Tag'

const HomePage: NextPage = () => {
    return (
        <MainLayout title="Create Draft">
            <div>
                <main className={styles.main}>
                    <h1> Create your draft</h1>
                    <h2>Choose the topic</h2>
                    ...
                    <h2>Choose note's preview image</h2>
                    ...
                    <h2>Short description</h2>
                    ...
                    <h2>Note content</h2>
                    <CreateDraft />
                    <h2>Choose corresponding tags:</h2>
                    <>
                        <TextTag value="film" isActive />
                        <TextTag value="FILM" isActive />
                    </>
                    <br />
                    <br />
                    <Button variant="outlined" color="primary">
                        Preview
                    </Button>
                </main>

                <footer></footer>
            </div>
        </MainLayout>
    )
}

export default HomePage
