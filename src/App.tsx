import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ProgressBarComponent from './Components/ProgressBar/ProgressBarComponent'
import TrainLines from './Components/TrainLines/TrainLines'
import { trainLines } from './data/train-lines'

function App() {

  return (
    <>
      <div className='chbi-container'>
        <NavBar />
        <div>
      {trainLines.map((line) => (
        <TrainLines key={line.id} name={line.name} color={line.color} />
      ))}
          <ProgressBarComponent/>
    </div>
      </div>
    </>
  )
}

export default App
