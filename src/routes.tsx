import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home.tsx'
import { Details } from './pages/details.tsx'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/:name'} element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}