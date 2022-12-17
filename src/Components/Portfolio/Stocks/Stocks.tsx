import { useState } from "react";
import styles from "./Stocks.module.css";
import Stock from "./Stock";


const Stocks = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [stocks, setStocks] = useState<string[]>([]);

    const addStock = () => {
        setStocks([...stocks, searchInput]);
    }
    return (
        <div className={styles.container}>
            <div>
                <input onChange={(e) => {setSearchInput(e.target.value)}} value={searchInput} maxLength={10} placeholder="ticker symbol..."/>
                <button onClick={() => {addStock()}}>Add</button>
            </div>
            <Stock symbol="cldx"/>
            {stocks.map((stock:string, index:number) => {
                return (
                    <Stock key={index} symbol={stock}/>
                )
            })}
        </div>
    )
}

export default Stocks;