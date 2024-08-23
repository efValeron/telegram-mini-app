import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { tg } from '@/app/telegram'
import { useLocale } from '@/shared/lib/hooks'

import s from './not-found.module.css'

export const NotFound = () => {
  const { l } = useLocale(tg.initDataUnsafe.user.language_code)
  const navigate = useNavigate()

  useEffect(() => {
    tg.BackButton.show().onClick(() => navigate(-1))
  }, [navigate])

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{l.errors.notFoundTitle}</h1>
      <p className={s.description}>{l.errors.notFoundDescription}</p>
    </div>
  )
}
