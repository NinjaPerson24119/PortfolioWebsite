import { useState } from 'react'
import './App.css'
import Navigation from './navigation/Navigation'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SpeedIcon from '@mui/icons-material/Speed';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <SpeedIcon fontSize="large" color="primary"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <AddReactionIcon fontSize="large" color="secondary"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
