import { useEffect } from 'react'

import { AppRoutes } from '@/app/routes'
import { tg } from '@/app/telegram'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
