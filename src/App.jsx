import './App.css'
import { Cards } from './component/cards/cards'

function App() {

  return (
    <>
      <h1>VanK(beta)</h1>
      <div className="card">
        <Cards />
      </div>
      {/* <p className="read-the-docs">
        数字をクリックするとリセットされます
      </p> */}
    </>
  )
}

export default App
