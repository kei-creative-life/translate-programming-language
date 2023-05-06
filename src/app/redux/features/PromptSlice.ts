import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

const initialState: { prompt: string } = {
  prompt: '',
}

export const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    updatePromptReducer: (state, actions) => {
      state.prompt = actions.payload
    },
    clearPromptReducer: (state) => {
      state.prompt = ''
    },
  },
})

export const { updatePromptReducer, clearPromptReducer } = promptSlice.actions

export const getPrompt = (state: RootState) => state.prompt.prompt

export default promptSlice.reducer
