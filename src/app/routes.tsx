import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Details, Home, NotFound } from '@/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/horoscope/:name'} element={<Details />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
