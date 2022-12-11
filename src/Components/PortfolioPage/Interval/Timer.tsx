import { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    }, [])
    return (
        <div>
            {time}
        </div>
    );
}

export default Timer;