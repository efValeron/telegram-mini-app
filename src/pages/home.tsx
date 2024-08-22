import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { tg } from '../telegram.ts'

export const Home = () => {
  useEffect(() => {
    tg.BackButton.hide()
  }, [])

  return (
    <div>
      <Link to={'/first'}>first</Link>
      <Link to={'/second'}>second</Link>
    </div>
  )
}