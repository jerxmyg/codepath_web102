import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const [inputs, setInputs] = useState({
  url: "",
  format: "",
  no_ads: "",
  no_cookie_banners: "",
  width: "",
  height: "",
});

function App() {
  const [count, setCount] = useState(0)

  return (
    
  )
}

export default App
