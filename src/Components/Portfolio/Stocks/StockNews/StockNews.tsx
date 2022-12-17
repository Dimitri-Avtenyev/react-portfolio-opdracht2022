import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./StockNews.module.css";
import { StockNewsData } from "../StockInterface";
import { Triangle } from "react-loader-spinner";

const apiKey: string = "L35CSN0XTY7ZF";

interface NewsProps {
    stocks: string[]
}
const StockNews = (stocks: NewsProps) => {
    const [stockNews, setStockNews] = useState<StockNewsData>();
    let symbolsLength: number = stocks.stocks.length;

    let symbol: string = stocks.stocks[Math.floor(Math.random() * symbolsLength)];
    let url: string = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&topics&apikey=${apiKey}`

    useEffect(() => {
        (async () => {
            let response = await fetch(url);
            let data: StockNewsData = await response.json();

            setStockNews(data);
        })();

    }, [])

    if (stockNews?.feed == undefined) {
        return <Triangle/>
    }

    return (
        <div className={styles.container}>
            <Carousel>
                {stockNews.feed.map((news, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={news.banner_image}
                            />
                            <Carousel.Caption>
                                <h3>{news.title}</h3>
                                <p>{news.summary}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default StockNews;