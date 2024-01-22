import { useState } from 'react'
import { useRoutes,Link } from "react-router-dom";
import router from './router'

function App() {
  const [count, setCount] = useState(0)
  const outlet= useRoutes(router)
  return (
    <div className='App'>
      {/* <Link to='/home'>Home</Link> */}
      
      {outlet}
    </div>
  )
}

export default App
