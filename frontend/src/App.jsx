import { useState, useEffect } from 'react'
import HelloWorld from './components/HelloWorld'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className="App">
      <HelloWorld />
      <p>Backend says: {message}</p>
    </div>
  )
}

export default App