import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { tg } from '../../telegram.ts'
import { useQuery } from '@tanstack/react-query'
import { GetHoroscope } from '../../types/server-responses.ts'
import { useLocale } from '../../shared/lib/hooks/use-locale.ts'
import { Ring } from '@uiball/loaders'

import s from './details.module.css'

export const Details = () => {
  const { l, isRu } = useLocale(tg.initDataUnsafe.user.language_code)

  const navigate = useNavigate()
  const { name } = useParams()

  useEffect(() => {
    tg.BackButton.show().onClick(() => navigate(-1))
  }, [ navigate ])

  const { data, isLoading, error } = useQuery({
    queryKey: [ 'horoscopes', name ],
    queryFn: async () => {
      try {
        const res = await (await fetch('https://poker247tech.ru/get_horoscope/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'language': isRu ? 'original' : 'translated',
            'period': 'today',
            'sign': name
          })
        })).json()

        return (res as GetHoroscope).horoscope
      } catch (e) {
        console.error(e)
      }
    }
  })

  if (!name) return <div>no name</div>

  if (error) return <div>Error: {error.message}</div>

  return (
    <div className={s.wrapper}>
      <div className={`loaderWrapper ${isLoading ? 'visible' : 'invisible'}`}>
        <Ring size={30} speed={1.5} color={'var(--tg-theme-text-color)'}/>
      </div>
      <div className={`${s.descriptionWrapper} ${isLoading ? 'invisible' : 'visible'}`}>
        <h1 className={s.name}>{l.names[name as keyof typeof l.names]}</h1>
        <p className={s.description}>{data && data}</p>
        <small className={s.period}>{l.periods[name as keyof typeof l.periods].from} — {l.periods[name as keyof typeof l.periods].to}</small>
      </div>
    </div>
  )
}