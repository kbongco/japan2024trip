import { useState } from 'react';
import { trainLines } from '@/data/train-lines';
import './Transportation.scss';
import TrainLines from '../TrainLines/TrainLines';

export default function Transportation() {
  const [selectedCity, setSelectedCity] = useState('Tokyo');

  const filteredTrains = trainLines.filter((train) => train.city === selectedCity)

  return (
    <>
      <div className='chbi-transportation-container'>
        <h1 className='chbi-transportation-header'>Transportation</h1>
        <p>These are some of the trainlines you took while you were in Japan</p>
        <div className='chbi-transportation-links'>
          <p onClick={() => setSelectedCity('Tokyo')}>Tokyo</p> |
          <p onClick={() => setSelectedCity('Osaka')}>Osaka</p> |
          <p onClick={() => setSelectedCity('Other')}>Other</p>
        </div>
        <div className='chbi-transportation-city-container'>
          <div className='chbi-transportation-city-sections'>
            <h3 className='chbi-transportation-city-name'>Tokyo</h3>
            {trainLines.filter(line => line.city === 'Tokyo').map(line => (
              <TrainLines
                name={line.name}
                color={line.color} />
            ))}
          </div>
          <div className='chbi-transportation-city-sections'>
            <h3 className='chbi-transportation-city-name'>Osaka</h3>
            {trainLines.filter(line => line.city === 'Osaka').map(line => (
              <TrainLines
                name={line.name}
                color={line.color} />
            ))}
          </div>

          <div className='chbi-transportation-city-sections'>
            <h3 className='chbi-transportation-city-name'>Various trains</h3>
            {trainLines.filter(line => line.city !== 'Osaka' && line.city !== 'Tokyo').map(line => (
              <TrainLines
                name={line.name}
                color={line.color} />
            ))}
          </div>
        </div>
        <div className='chbi-transportation-trains-mobile'>
          <div className='chbi-transportation-trains'>
            <h1 className='chbi-transportation-city'>{selectedCity}</h1>
          </div>
          <div className='chbi-transportation-train-lines-mobile'>
            {filteredTrains.map((line) => (
              <TrainLines
                name={line.name}
                color={line.color} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}