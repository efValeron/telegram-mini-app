import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { tg } from 'src/telegram.ts'
import { useQuery } from '@tanstack/react-query'
import { GetHoroscopes } from 'src/types/server-responses.ts'
import { horoscopeNames } from 'src/horoscope-names.ts'

export const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [ 'horoscopes' ],
    queryFn: async () => {
      try {
        const res = await (await fetch('https://poker247tech.ru/get_horoscope/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'language': tg.initDataUnsafe.user.language_code === 'ru' ? 'original' : 'translated',
            'period': 'today'
          })
        })).json()

        return (res as GetHoroscopes).horoscope
      } catch (e) {
        console.error(e)
      }
    }
  })

  useEffect(() => {
    tg.BackButton.hide()
  }, [])

  if (isLoading) return <div>loading...</div>

  if (error) return <div>Error: {error.message}</div>

  if (!data) return <div>no data</div>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {Object.keys(data).map(key => (
        <Link to={key}>{
          tg.initDataUnsafe.user.language_code === 'ru'
            ? horoscopeNames[key as keyof typeof horoscopeNames].charAt(0).toUpperCase() + horoscopeNames[key as keyof typeof horoscopeNames].slice(1)
            : key.charAt(0).toUpperCase() + key.slice(1)
        }</Link>
      ))}
    </div>
  )
}