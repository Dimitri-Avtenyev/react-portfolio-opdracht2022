import { useState } from "react";
import styles from "./Stocks.module.css";
import Stock from "./Stock";
import StockNews from "./StockNews/StockNews";


const Stocks = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [stocks, setStocks] = useState<string[]>(["nflx"]);
    
    const addStock = () => {
        setStocks([...stocks, searchInput]);
    }

    return (
        <div className={styles.container}>
            <div className={styles.stocknews}>
                <StockNews stocks={stocks}/>
            </div>
            <div>
                <input onChange={(e) => {setSearchInput(e.target.value)}} value={searchInput} maxLength={10} placeholder="ticker symbol... e.g. TSLA"/>
                <button onClick={() => {addStock()}}>Add</button>
            </div>
            {stocks.map((stock:string, index:number) => {
                return (
                    <Stock key={index} symbol={stock}/>
                )
            })}
        </div>
    )
}

export default Stocks;