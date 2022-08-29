import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import draftReducer from './slices/DraftSlice'
import authReducer from './slices/AuthSlice'

const rootReducer = combineReducers({
    draft: draftReducer,
    auth: authReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
