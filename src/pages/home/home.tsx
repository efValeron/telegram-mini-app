import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { tg } from '@/app/telegram'
import { useLocale } from '@/shared/lib/hooks'

import s from './home.module.css'

export const Home = () => {
  const { l } = useLocale(tg.initDataUnsafe.user.language_code)

  useEffect(() => {
    tg.BackButton.hide()

    tg.isBiometricAvailable &&
      tg.BiometricManager.init()
        .biometricType('finger')
        .requestAccess('Scan your finger', (authenticatedSuccessfully: boolean) => {
          alert(authenticatedSuccessfully ? `Authenticated successfully.` : 'Authentication failed')
        })
  }, [])

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{l.titles.main}</h1>
      {Object.keys(l.names).map(key => {
        const Icon = l.icons[key as keyof typeof l.icons]

        return (
          <Link className={s.link} to={`/horoscope/${key}`}>
            <div className={s.iconWrapper}>
              <Icon className={s.icon} fill={'var(--tg-theme-text-color)'} />
            </div>
            <div className={s.info}>
              <h1 className={s.name}>{l.names[key as keyof typeof l.names]}</h1>
              <p className={s.period}>
                {l.periods[key as keyof typeof l.periods].from} —{' '}
                {l.periods[key as keyof typeof l.periods].to}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
