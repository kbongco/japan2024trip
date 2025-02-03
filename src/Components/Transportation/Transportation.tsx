import { useState } from 'react';
import './Transportation.scss';

export default function Transportation() {
  const [selectedCity, setSelectedCity] = useState('Tokyo');
  return (
    <>
      <div className='chbi-transportation-container'>
        <h1 className='chbi-transportation-header'>Transportation</h1>
        <div className='chbi-transportation-links'>
          <p onClick={() => setSelectedCity('Tokyo')}>Tokyo</p> | 
          <p onClick={() => setSelectedCity('Osaka')}>Osaka</p> |
          <p onClick={() => setSelectedCity('Other')}>Other</p>
        </div>
        <div className='chbi-transportation-trains'>
          <h1 className='chbi-transportation-city'>{selectedCity}</h1>
        </div>
      </div>
    </>
  )
}