import { createContext } from 'react'

export const LangContext = createContext({
  langType: '',
  updateLangType: (langType: string): void => {},
})

export const PromptContext = createContext({
  prompt: '',
  updatePrompt: (prompt: string): void => {},
})
