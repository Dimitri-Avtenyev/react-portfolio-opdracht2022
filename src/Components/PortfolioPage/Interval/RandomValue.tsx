import { useState, useEffect } from "react";

const RandomValue = ({min, max}:{min:number, max:number}) => {
    const [randomNumber, setRandomNumber] = useState<number>();
    
    const getRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random()*(max - min) + min));
    }
    
    useEffect(() => {
        let interval = setInterval(() => {
            getRandomNumber();
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <span>Random value between {min} and {max}: {randomNumber}</span>
        </div>
    );
}

export default RandomValue;