import React, { Component,useContext } from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import {chartOptions} from "./PriceChartconfig"
import Chart from 'react-apexcharts'
import { Context } from '../Context/Context'

const priceSymbol = (lastPriceChange) => {
  let output
  if(lastPriceChange === '+') {
    output = <span className="text-success">&#9650;</span> // Green up tiangle
  } else {
    output = <span className="text-danger">&#9660;</span> // Red down triangle
  }
  return(output)
}

const showPriceChart = (priceChart) => {
  return(
    <div className="price-chart">
      <div className="price">
        <h4>DAPP/ETH &nbsp; {priceSymbol(priceChart.lastPriceChange)} &nbsp; {priceChart.lastPrice}</h4>
      </div>
      <Chart options={chartOptions} series={priceChart.series} type='candlestick' width='100%' height='100%' />
    </div>
  )
}

const PriceChart=()=> {
    const {graphData} = useContext(Context)
  
    return (
      <div className="card bg-dark text-white">
        <div className="card-header">
          Price Chart
        </div>
        <div className="card-body">
          {graphData ? showPriceChart(graphData) : <Spinner />}
        </div>
      </div>
    )
  }


// function mapStateToProps(state) {

//   return {
//     priceChartLoaded: priceChartLoadedSelector(state),
//     priceChart: priceChartSelector(state),
//   }
// }

// export default connect(mapStateToProps)(PriceChart)
export default PriceChart;
