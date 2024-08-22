import './App.css'
import { AppRoutes } from './routes.tsx'

export const App = () => {
  // const [ ru, setRu ] = useState(false)
  // const [ data, setData ] = useState<any[]>([])
  // const [isLoading, setIsLoading] = useState(true)
  //
  // useEffect(() => {
  //   setRu(tg.initDataUnsafe.user.language_code === ru)
  //
  //   fetch('https://poker247tech.ru/get_horoscope/', {
  //     body: JSON.stringify({
  //       language: 'original',
  //       period: 'today'
  //     })
  //   }).then((res) => res.json()).then((data) => setData(data)).finally(()=>setIsLoading(false))
  // }, [])
  //
  // return (
  //   <div>
  //     <h1>telegram-mini</h1>
  //     {ru && <h2>Language is ru</h2>}
  //     {isLoading && <h2>Loading...</h2>}
  //     {data.length > 0 && JSON.stringify(data)}
  //     <button onClick={() => setRu(!ru)}>{ru ? 'Change language' : 'Изменить язык'}</button>
  //     <button onClick={() => tg.close()}>{ru ? 'Закрыть' : 'Close'}</button>
  //   </div>
  // )
  return <AppRoutes/>
}
