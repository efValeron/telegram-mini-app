import { Home } from '@/pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details } from '@/pages/details/details'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/:name'} element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
