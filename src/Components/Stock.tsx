const {StringStream} = require("scramjet");
const request = require("request");

const apiKey:string = "L35CSN0XTY7ZF";
// rewrite if possible with fetch
const Stock = () => {
// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key

'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err:any, res:any, data:any) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});
return (
    <div>
        
    </div>
    )
}



export default  Stock;