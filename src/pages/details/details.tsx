import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { tg } from 'src/telegram.ts'
import { useQuery } from '@tanstack/react-query'
import { GetHoroscope } from 'src/types/server-responses.ts'
import { horoscopeNames } from 'src/horoscope-names.ts'

export const Details = () => {
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
            'language': tg.initDataUnsafe.user.language_code === 'ru' ? 'original' : 'translated',
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

  if (isLoading) return <div>loading...</div>

  if (error) return <div>Error: {error.message}</div>

  if (!data) return <div>no data</div>

  const horoscopeName = tg.initDataUnsafe.user.language_code === 'ru'
    ? horoscopeNames[name as keyof typeof horoscopeNames].charAt(0).toUpperCase() + horoscopeNames[name as keyof typeof horoscopeNames].slice(1)
    : name!.charAt(0).toUpperCase() + name!.slice(1)

  return (
    <div>
      <h1>{horoscopeName}</h1>
      <p>{data}</p>
    </div>
  )
}