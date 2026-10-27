import { useState, useEffect } from 'react'
import Form from './Form'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {

    const getData = async () => {
      const response = await fetch(
        'https://dummyjson.com/products'
      )

      const result = await response.json()

      setData(result)
    }

    getData()

  }, [])

  return (
    <>
    {
      data.map(item => {
        <div>
          
        </div>
      })
    }
    </>
  )
}

export default App

