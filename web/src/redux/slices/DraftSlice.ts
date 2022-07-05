import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type DraftState = {
    text: string
}

const initialState: DraftState = {
    text: '',
}

export const draftSlice = createSlice({
    name: 'draft',
    initialState: initialState,
    reducers: {
        updateText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
})

export const { updateText } = draftSlice.actions

export const selectText = (state: RootState) => state.draft.text

export default draftSlice.reducer
