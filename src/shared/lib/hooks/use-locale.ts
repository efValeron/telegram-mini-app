import { en, ru } from '@/shared/locales'

export const useLocale = (language_code: string) => {
  const isRu = language_code === 'ru'

  return {
    l: isRu ? ru : en,
    isRu,
  } as const
}
