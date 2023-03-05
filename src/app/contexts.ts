import { createContext } from 'react'

export const LangContext = createContext({
  beforeLang: '',
  updateBeforeLang: (e: Event): void => {},
  afterLang: '',
  updateAfterLang: (e: Event): void => {},
})

export const PromptContext = createContext({
  prompt: '',
  updatePrompt: (prompt: string): void => {},
})
