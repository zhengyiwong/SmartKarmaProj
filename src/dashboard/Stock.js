import React from 'react';
import Plot from 'react-plotly.js';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues:[],
            stockChartYValues: []
        }
    }

    componentWillMount() {
        this.fetchStock();
    }
/*"2019-10-25": {
    "1. open": ,
    "2. high": ,
    "3. low": ,
    "4. close": ,
    "5. adjusted close": ,
    "6. volume": ,
    "7. dividend amount": ,
    "8. split coefficient": 
    */

    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        const API_KEY = "9WMAXD4SQBVAEVYE";
        let StockSymbol = "MSFT";
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_CALL)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                console.log(data);

                for (var key in data['Time Series (Daily)']) {
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data[`Time Series (Daily)`][key]['1. open']);
                }

                pointerToThis.setState({
                    stockChartXValues: stockChartXValuesFunction,
                    stockChartYValues: stockChartYValuesFunction
                });
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Microsoft Stock Price</h1>
                <Plot
                data={[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    }
                ]}
                layout={{width: 720, height: 440, title: 'Stock Price'}}
                />
            </div>
        );

    }
}

export default Stock;
