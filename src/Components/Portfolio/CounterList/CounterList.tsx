import { useState } from "react";

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    }
    const upTickCounter = (index:number) => {
        counters[index]++;
        setCounters([...counters]);
    }
    const downTickCounter = (index:number) => {
        counters[index]--;
        setCounters([...counters]);
    }//{color: counter > 0 ? "green" : "red"}
    return (
        <div>
            {counters.map((counter, index) => {
                  let color = 'black';
                  if (counter > 0) {
                      color = 'green';
                  } else if (counter < 0) {
                      color = 'red';
                  }
                return (
                
                <div key={index} style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                    <button style={{borderRadius: "20px"}} onClick={() => upTickCounter(index)}>Omhoog</button>
                    <span style={{color: color}}>Count: {counter} </span> 
                    <button style={{borderRadius: "20px"}} onClick={() => downTickCounter(index)}>Omlaag</button>
                </div>
                )
            })}
            <p>Som van tellers: {counters.reduce((sum, curr) => sum+curr, 0)}  </p>
            <button style={{borderRadius: "20px"}} onClick={addCounter}>Voeg teller toe</button>
        </div>

    )
}

export default CounterList;