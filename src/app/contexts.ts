import { createContext } from 'react'
import { LangType } from './types/app'

export const LangContext = createContext({
  langType: '',
  updateLangType: (langType: LangType): void => {},
})

export const PromptContext = createContext({
  prompt: '',
  updatePrompt: (prompt: string): void => {},
})
