import React, {useState} from 'react'
import Produto from './Produto';
import Slide from './Slide';
import './App.css'

const App = () => {
  const [ativar, setAtivar] = useState(false);
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
    },
  ];

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
      <br /><br />
      <Slide slides={slides} />
    </div>
  )
}

export default App