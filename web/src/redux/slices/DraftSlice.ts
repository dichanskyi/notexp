import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DraftState } from '../state_types/draftState'
import type { RootState } from '../store'

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

export const draftActions = {
    ...draftSlice.actions,
}

export const draft = (state: RootState) => state
export const selectDraft = (state: RootState) => state.draft
export const selectText = (state: RootState) => state.draft.text

export default draftSlice.reducer
