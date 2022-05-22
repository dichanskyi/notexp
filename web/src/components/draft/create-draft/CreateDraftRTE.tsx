import RichTextEditor from '../rte/RichTextEditor'
import { useState } from 'react'
import { StylesContext } from '@material-ui/styles'
import styles from '../../../styles/draft/rte.module.scss'

export const CreateDraftRTE = (): JSX.Element => {
    const [editorValue, setEditorValue] = useState('')

    return (
        <div>
            <RichTextEditor
                className={styles.rich_text_editor}
                value={editorValue}
                onChange={setEditorValue}
                sticky={true}
                controls={[
                    ['bold', 'italic', 'strike', 'underline'],
                    ['link', 'image', 'video'],
                    ['unorderedList', 'h1', 'h2', 'h3'],
                    ['alignLeft', 'alignCenter', 'alignRight'],
                    ['sup', 'sub'],
                ]}
            />
        </div>
    )
}
