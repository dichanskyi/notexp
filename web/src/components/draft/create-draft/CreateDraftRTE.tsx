import RichTextEditor from '../rte/RichTextEditor'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { draftActions, selectText } from '../../../redux/slices/DraftSlice'

import styles from '../../../styles/draft/rte.module.scss'

export const CreateDraftRTE: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const createDraftText = useAppSelector(selectText)
    // const [editorValue, setEditorValue] = useState(createDraftText)

    return (
        <div>
            <RichTextEditor
                className={styles.rich_text_editor}
                value={createDraftText}
                onChange={(value) => {
                    dispatch(draftActions.updateText(value))
                }}
                sticky={true}
                controls={[
                    ['bold', 'italic', 'strike', 'underline'],
                    ['link', 'image', 'video'],
                    ['unorderedList', 'h1', 'h2', 'h3', 'code'],
                    ['alignLeft', 'alignCenter', 'alignRight'],
                    ['sup', 'sub'],
                ]}
            />
        </div>
    )
}
