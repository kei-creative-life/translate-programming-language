import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export const getTranslatedCode = async (prompt: string) => {
  const response = await openai.createCompletion({
    model: 'code-davinci-002',
    prompt: prompt,
    temperature: 0,
    max_tokens: 200, // 最大文字数
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ['###'],
  })

  if (response.status !== 200) throw new Error('Something went wrong')
  if (!response.data.choices[0].text) return ''

  return response.data.choices[0].text?.replace(/^\n    /, '')
}
