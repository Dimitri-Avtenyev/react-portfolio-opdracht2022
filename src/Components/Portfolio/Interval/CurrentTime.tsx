import {useState, useEffect} from "react";

const CurrentTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let interval = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <span>Current time: <b>{date.toLocaleTimeString()}</b></span>
        </div>
    );
}
export default CurrentTime;