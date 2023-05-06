import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { LangType } from '@/app/types/app'

interface InitialState {
  inputLang: LangType
  outputLang: LangType
}

const initialState: InitialState = {
  inputLang: 'Ruby',
  outputLang: 'Python',
}

export const languageSlice = createSlice({
  name: 'langauge',
  initialState,
  reducers: {
    setInputLanguageReducer: (state, action) => {
      state.inputLang = action.payload
    },
    setOutputLanguageReducer: (state, action) => {
      state.outputLang = action.payload
    },
  },
})

export const { setInputLanguageReducer, setOutputLanguageReducer } = languageSlice.actions

export const inputLang = (state: RootState) => state.language.inputLang

export const outputLang = (state: RootState) => state.language.outputLang

export default languageSlice.reducer
