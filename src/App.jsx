import './App.css'
import { Cards } from './component/cards/cards'
import { E_counter } from './component/e_counter/e_counter'

function App() {

  return (
    <>
      {/* <h1>Van-Kei</h1> */}
      <div className="contents">
        <E_counter />
        <div className="card">
          <Cards />
        </div>
      </div>
      {/* <p className="read-the-docs">
        数字をクリックするとリセットされます
      </p> */}
    </>
  )
}

export default App
