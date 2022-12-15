// Stock data
export interface StockData {
    "Global Quote": GlobalQuote;
}
export interface GlobalQuote {
    "01. symbol":             string;
    "02. open":               string;
    "03. high":               string;
    "04. low":                string;
    "05. price":              string;
    "06. volume":             string;
    "07. latest trading day": Date;
    "08. previous close":     string;
    "09. change":             string;
    "10. change percent":     string;
}
// Search stock data
export interface StockSearchData {
    bestMatches: StockSearchDataBestMatch[]
}
export interface StockSearchDataBestMatch {
    "1. symbol":      string,
    "2. name":        string,
    "3. type":        string,
    "4. region":      string,
    "5. marketOpen":  string,
    "6. marketClose": string,
    "7. timezone":    string,
    "8. currency":    string,
    "9. matchScore":  string
}
// Stock company overview 
export interface StockOverview {
    Symbol:                     string,
    AssetType:                  string,
    Name:                       string,
    Description:                string,
    CIK:                        string,
    Exchange:                   string,
    Currency:                   string,
    Country:                    string,
    Sector:                     string,
    Industry:                   string,
    Address:                    string,
    FiscalYearEnd:              string,
    LatestQuarter:              Date,
    MarketCapitalization:       string,
    EBITDA:                     string,
    PERatio:                    string,
    PEGRatio:                   string,
    BookValue:                  string,
    DividendPerShare:           string,
    DividendYield:              string,
    EPS:                        string,
    RevenuePerShareTTM:         string,
    ProfitMargin:               string,
    OperatingMarginTTM:         string,
    ReturnOnAssetsTTM:          string,
    ReturnOnEquityTTM:          string,
    RevenueTTM:                 string,
    GrossProfitTTM:             string,
    DilutedEPSTTM:              string,
    QuarterlyEarningsGrowthYOY: string,
    QuarterlyRevenueGrowthYOY:  string,
    AnalystTargetPrice:         string,
    TrailingPE:                 string,
    ForwardPE:                  string,
    PriceToSalesRatioTTM:       string,
    PriceToBookRatio:           string,
    EVToRevenue:                string,
    EVToEBITDA:                 string,
    Beta:                       string,
    "52WeekHigh":               string,
    "52WeekLow":                string,
    "50DayMovingAverage":       string,
    "200DayMovingAverage":      string,
    SharesOutstanding:          string,
    DividendDate:               Date,
    ExDividendDate:             Date,
}
