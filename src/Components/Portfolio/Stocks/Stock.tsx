import { useEffect, useState } from "react";
import { StockData, StockSearchData } from "./StockInterface";
import { Triangle } from "react-loader-spinner";
import styles from "./Stock.module.css";

const apiKey: string = "L35CSN0XTY7ZF";

interface StockProps {
    symbol: string
}
const Stock = (symbol: StockProps) => {
    const [stockData, setStockData] = useState<StockData>();
    const [stockSearchData, setStockSearchData] = useState<StockSearchData>()
    const [loading, setLoading] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string>("");

    //setSymbol(tickerSymbol.name);
    let urlStock: string = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol.symbol}&apikey=${apiKey}`;
    let urlStockOverview = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol.symbol}&apikey=${apiKey}`;
    let urlSearch: string = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=${apiKey}`;


    useEffect(() => {
        const fetchStock = async () => {
            setLoading(true);

            let reponse = await fetch(urlStock);
            let data: StockData = await reponse.json();
            setStockData(data);

            setLoading(false);
        }
        const fetchSearchStock = async () => {
            setLoading(true);

            let reponse = await fetch(urlSearch);
            let data: StockSearchData = await reponse.json();
            setStockSearchData(data);
        }
        fetchStock();  
        //fetchSearchStock(); 
    }, [searchInput]);
  
    if (!loading && stockData?.["Global Quote"] === undefined ) {
       return <Triangle/>;
    } 
    return (
        <div className={styles.container}>
            <input onChange={(e) => {setSearchInput(e.target.value)}} value={searchInput} maxLength={10}/>
            <div>
            {stockData?.["Global Quote"]["01. symbol"]}
            </div>
         </div>
    )
}



export default Stock;