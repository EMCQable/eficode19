import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import windowSize from 'react-window-size';
import { backward, forward, weekview, dayview } from '../reducers/filterReducer'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  GradientDefs,
} from 'react-vis'

const DataChart = (props) => (
  <div>
    <XYPlot height={props.windowHeight * 0.8} width={props.windowWidth * 0.8} xType="time">
      <GradientDefs>
        {/*        <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity={0.4} />
          <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
        </linearGradient>*/}
      </GradientDefs>
      <VerticalGridLines values={[0]} />
      <HorizontalGridLines />

      <XAxis
        style={{
          line: { stroke: '#ADDDE1' },
          ticks: { stroke: '#ADDDE1' },
          text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 }
        }} />
      <YAxis
        style={{
          line: { stroke: '#ADDDE1' },
          ticks: { stroke: '#ADDDE1' },
          text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 }
        }} />
      {/*<AreaSeries
        color={'url(#CoolGradient)'}
        data={props.data}
      />*/}
      <LineSeries data={filteredData(props)}
        style={{ strokeWidth: '3px' }}
      />
    </XYPlot>
    <Button
      onClick={Backward(props)}
    >Back</Button>
    <Button
      onClick={ChangeView(props)}
    >Week/Day</Button>
    <Button
      onClick={Forward(props)}
    >Forward</Button>
  </div>
)

const ChangeView = ({ filters, weekview, dayview, sensor }, ) => () => {
  if (filters[sensor].view_length === 'day') {
    weekview(sensor)
  } else {
    dayview(sensor)
  }
}

const Forward = ({ forward, sensor }) => () => {
  forward(sensor)
}

const Backward = ({ backward, sensor }) => () => {
  backward(sensor)
}

const TransformedData = (state, sensor) => {
  let data = []
  state.data.Items.forEach(element => {
    let time = new Date(element.date)
    data.push({ x: time, y: element[sensor] })
  })
  data.sort((a, b) => a.x - b.x)
  return data
}

const filteredData = ({ filters, sensor, data }) => {
  const startdate = filters[sensor].start
  const enddate = filters[sensor].end
  const filteredData = data.filter(element => element.x.getDate() >= startdate.getDate()
    && element.x.getDate() <= enddate.getDate())
  return filteredData
}

const mapDispatchToProps = {
  backward,
  forward,
  dayview,
  weekview
}

const mapStateToProps = (state, props) => {
  return {
    data: TransformedData(state, props.sensor),
    filters: state.filters
  }
}

export default
  windowSize(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(DataChart))