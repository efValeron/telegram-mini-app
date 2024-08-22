import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { tg } from '../telegram.ts'

export const Details = () => {
  const navigate = useNavigate()

  useEffect(() => {
    tg.BackButton.show().onClick(() => navigate(-1))
  }, [ navigate ])

  const { name } = useParams()

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}