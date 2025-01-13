import './App.css'
import Card from './Components/Card/Card'
import NavBar from './Components/NavBar/NavBar'
import ProgressBarComponent from './Components/ProgressBar/ProgressBarComponent'
import TrainLines from './Components/TrainLines/TrainLines'
import { trainLines } from './data/train-lines'
import { statsData } from './data/statsData';
import MenuCard from './Components/MenuCard/MenuCard'

function App() {

  return (
    <>
      <div className='chbi-container'>
        <NavBar />
        <div>
          {trainLines.map((line) => (
            <TrainLines key={line.id} name={line.name} color={line.color} />
          ))}
          <ProgressBarComponent />
        </div>

        <div>
          {statsData.map((stat) => ( 
            <Card key={stat.id} icon={stat.icon} title={stat.title} description={stat.description}
            value ={stat.value}/>
          ))}
        </div>
        <div>
          <MenuCard/>
        </div>
      </div>
    </>
  )
}

export default App
