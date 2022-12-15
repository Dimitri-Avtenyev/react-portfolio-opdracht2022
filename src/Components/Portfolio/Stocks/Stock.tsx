import { useEffect, useState } from "react";
import { StockData, StockOverview, StockSearchData } from "./StockInterface";
import { Triangle } from "react-loader-spinner";
import styles from "./Stock.module.css";

const apiKey: string = "L35CSN0XTY7ZF";

interface StockProps {
    symbol: string
}
const Stock = (symbol: StockProps) => {
    const [stockData, setStockData] = useState<StockData>();
    const [stockOverview, setStockOVerview] = useState<StockOverview>();
    //const [stockSearchData, setStockSearchData] = useState<StockSearchData>();
    let urlStock: string = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol.symbol}&apikey=${apiKey}`;
    let urlStockOverview = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol.symbol}&apikey=${apiKey}`;
    //let urlSearch: string = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=${apiKey}`;


    useEffect(() => {
        const fetchStock = async () => {
            let reponse = await fetch(urlStock);
            let data: StockData = await reponse.json();
            if (data["Global Quote"] != null) {
                setStockData(data);
            }

        }
        const fetchStockOverview = async () => {
            let response = await fetch(urlStockOverview);
            let data: StockOverview = await response.json();
            setStockOVerview(data);
        }
        fetchStock();
        fetchStockOverview();
    }, []);
 

    if (stockData?.["Global Quote"] === undefined) {
        return <Triangle />;
    }
    let colorPrice = ():string => {
        if (parseFloat(stockData?.["Global Quote"]["09. change"])< 0) {
            return "red";
        }
        return "green";
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>{stockOverview?.Name}</h1>
                    <h2>ticker symbol: ({stockData["Global Quote"]["01. symbol"]})</h2>
                </div>
                <div className={styles.info}>
                    <p>Sector: {stockOverview?.Sector}</p>
                    <p>Market cap: {stockOverview?.MarketCapitalization}</p>
                    <p>Countery: {stockOverview?.Country}</p>
                </div>
                <div className={styles.priceContainer}>
                    <span>{stockOverview?.Currency} </span>
                    <span>{(parseFloat(stockData["Global Quote"]["08. previous close"])).toFixed(2)}</span>
                    <div className={styles.priceChange}>
                        <span style={{color: colorPrice()}}>
                            {parseFloat(stockData["Global Quote"]["09. change"]).toFixed(2)}
                        </span>
                        <span style={{color: colorPrice()}}>
                            {parseFloat(stockData["Global Quote"]["10. change percent"]).toFixed(2)}%
                        </span>
                    </div>
                </div>
            </div>
                <div className={styles.description}>
                    {stockOverview?.Description}
                </div>
        </div>

    )
}



export default Stock;