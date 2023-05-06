import { createSlice } from '@reduxjs/toolkit'
import { LangType } from '@/app/types/app'
import type { RootState, AppDispatch } from './store'

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
    setInputLanguage: (state, action) => {
      state.inputLang = action.payload
    },
    setOutputLanguage: (state, action) => {
      state.outputLang = action.payload
    },
  },
})

export const { setInputLanguage, setOutputLanguage } = languageSlice.actions

export const inputLang = (state: RootState) => state.language.inputLang

export const outputLang = (state: RootState) => state.language.outputLang

export default languageSlice.reducer
