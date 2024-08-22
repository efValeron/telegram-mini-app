import './App.css'
import { AppRoutes } from './routes.tsx'
import { useEffect } from 'react'
import { tg } from './telegram.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const App = () => {
  const queryClient = new QueryClient()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes/>
    </QueryClientProvider>
  )
}
