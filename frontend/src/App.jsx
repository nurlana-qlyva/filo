import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:8081/araclar')
    .then(res => res.json())
    .then(res => setData(res))
  })
console.log(data)

  return (
    <>
      {data.map(item => item.plaka)}
      hello
    </>
  )
}

export default App
