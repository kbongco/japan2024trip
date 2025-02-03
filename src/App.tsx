import './App.css'
import BasicStats from './Components/BasicStats/BasicStats'
import NavBar from './Components/NavBar/NavBar'
import Transportation from './Components/Transportation/Transportation'
import Welcome from './Components/Welcome/Welcome'

function App() {

  return (
    <>
      <div className='chbi-container'>
        <NavBar />
        <Welcome />
        <BasicStats />
        <Transportation/>
      </div>
    </>
  )
}

export default App
