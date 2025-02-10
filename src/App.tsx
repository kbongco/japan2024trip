import './App.css'
import BasicStats from './Components/BasicStats/BasicStats'
import FoodTimeLine from './Components/FoodTimeLine/Food'
import FunStuff from './Components/FunStuff/FunStuff'
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
        <Transportation />
        <FoodTimeLine/>
        <FunStuff/>
      </div>
    </>
  )
}

export default App
