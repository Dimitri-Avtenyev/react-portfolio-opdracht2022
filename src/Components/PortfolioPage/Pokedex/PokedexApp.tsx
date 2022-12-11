import { useState } from 'react';
import Pokedex from './Pokedex';

const PokedexApp = () => {
  const [limit, setLimit] = useState<number>(151);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  
  return (
    <>
      <Pokedex limit={currentLimit}/>
      <div>
      <input type="number" value= {limit} onChange={(e) => {setLimit(parseInt(e.target.value))}}></input>
      <button onClick={() => {setCurrentLimit(limit)}}>Set Limit</button>
      </div>
    </>

  );
}

export default PokedexApp;
