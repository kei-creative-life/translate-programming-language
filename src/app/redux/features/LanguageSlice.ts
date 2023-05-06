import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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

export const inputLang = (state: any) => state.language.inputLang

export const outputLang = (state: any) => state.language.outputLang

export default languageSlice.reducer
