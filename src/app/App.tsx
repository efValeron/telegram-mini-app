import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { tg } from '@/app/telegram'
import { AppRoutes } from '@/app/routes'

export const App = () => {
  const queryClient = new QueryClient()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}
