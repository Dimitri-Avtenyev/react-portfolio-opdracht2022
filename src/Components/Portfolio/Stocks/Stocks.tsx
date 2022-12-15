import { useState } from "react";
import Stock from "./Stock";


const Stocks = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    return (
        <div>
            <input onChange={(e) => {setSearchInput(e.target.value)}} value={searchInput} maxLength={10} placeholder="ticker symbol..."/>
           
            <Stock symbol="cldx"/>
        </div>
    )
}

export default Stocks;