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

export const SelectLangContext = createContext({
  input: '' as LangType,
  updateInput: (lang: LangType): void => {},
  output: '',
  updateOutput: (lang: LangType): void => {},
})
