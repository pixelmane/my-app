import { useDispatch } from 'react-redux';
import './App.css';

import { Cards } from './card.js';
import { resetStats } from './card.js';

function App(){
  let dispatch = useDispatch();
  function handleClick() {
    resetStats()
    dispatch({
      type: 'allCards/restart'
    })
  }
  return (
    <div id='page'>
      <Cards />
      <div id='restart' onClick={() => handleClick()} >Restart</div>
    </div>
  )
}


export default App;
