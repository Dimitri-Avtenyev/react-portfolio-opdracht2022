import { useEffect, useState } from "react";
import { StockData, StockOverview, StockSearchData, GlobalQuote } from "./StockInterface";
import { Triangle } from "react-loader-spinner";
import styles from "./Stock.module.css";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";

const apiKey: string = "L35CSN0XTY7ZF";

const loadingPlaceholder = () => {
    return (
        <div className={styles.containerPlaceholder}>
        <Triangle />
        <p>loading...</p>
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Placeholder animation="glow">
                    <div className={styles.containerPlaceholderHeader}>
                    <Placeholder xs={4} /> <Placeholder xs={4}/>
                    </div>
                    <Placeholder xs={12} /> <Placeholder xs={12} />
                </Placeholder>
            </Card.Body>
        </Card>
    </div>
    );
}
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

    // *500 calls /day & 5 calls/min*
    useEffect(() => {
        const fetchStock = async () => {
            let response = await fetch(urlStock);
            let data: StockData = await response.json();
            setStockData(data);
        }
        const fetchStockOverview = async () => {
            let response = await fetch(urlStockOverview);
            let data: StockOverview = await response.json();
            setStockOVerview(data);
        }
        fetchStock();
        fetchStockOverview();
    }, []);

    if (!stockData?.["Global Quote"] || !stockOverview) {
        return loadingPlaceholder();
    }

    let positiveValue = (): boolean => {
        if (parseFloat(stockData?.["Global Quote"]["09. change"]) < 0) {
            return false;
        }
        return true;
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
                    <p>Country: {stockOverview?.Country}</p>
                </div>
                <div className={styles.priceContainer}>
                    <span>{stockOverview?.Currency} </span>
                    <span className={styles.priceStock}>{(parseFloat(stockData["Global Quote"]["05. price"])).toFixed(2)}</span>
                    <div className={styles.priceChange}>
                        <span className={positiveValue() ? styles.positiveValue : styles.negativeValue}>
                            {parseFloat(stockData["Global Quote"]["09. change"]).toFixed(2)}
                        </span>
                        <span className={positiveValue() ? styles.positiveValue : styles.negativeValue}>
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