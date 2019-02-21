import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries,
  GradientDefs,
} from 'react-vis'

const DataChart = (props) => (
  <div>
    <XYPlot height={800} width={1000} xType="time">
      <GradientDefs>
        <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity={0.4} />
          <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
        </linearGradient>
      </GradientDefs>
      <VerticalGridLines />
      <HorizontalGridLines />

      <XAxis />
      <YAxis />
      <AreaSeries
        color={'url(#CoolGradient)'}
        data={props.data}
      />
      {/*<LineMarkSeries data={props.data}
        style={{ strokeWidth: '3px' }}
        lineStyle={{ stroke: 'red' }}
/>*/}
    </XYPlot>
    <Button>Week/Day</Button>
  </div>
)

const TransformedData = (state, sensor) => {
  let data = []
  state.data.Items.forEach(element => {
    let time = new Date(element.date)
    console.log(time)
    data.push({ x: time, y: element[sensor] })
  })
  data.sort((a, b) => a.x - b.x)
  return data
}

const mapDispatchToProps = {
}

const mapStateToProps = (state, props) => {
  return {
    data: TransformedData(state, props.sensor)
  }
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DataChart)