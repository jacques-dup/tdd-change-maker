import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import './App.css'

type Currency = 'usd' | 'fkr' | 'gbp'

interface AppProps extends ComponentPropsWithoutRef<'div'> {
  currency: Currency
}

export const App = ({currency, ...props}: AppProps) => {


  const [coins, setCoins] = useState<number[]>([])

  useEffect(()=>{
    if (currency === 'usd'){
      setCoins([1, 5, 10, 25])
    }
  }, [currency])
  

  return (
    <>
      <div id="app" {...props}>
        Change Maker!
        <div className="coins">
          {coins.join(', ')}
        </div>
      </div>
    </>
  )
}

export default App
