import './App.css'
import BasicStats from './Components/BasicStats/BasicStats'
import NavBar from './Components/NavBar/NavBar'
import Welcome from './Components/Welcome/Welcome'

function App() {

  return (
    <>
      <div className='chbi-container'>
        <NavBar />
        <Welcome />
        <BasicStats/>
      </div>
    </>
  )
}

export default App
