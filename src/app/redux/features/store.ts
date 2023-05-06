'use client'

import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './LanguageSlice'
import promptReducer from './PromptSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    prompt: promptReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
