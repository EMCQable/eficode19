import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initData } from './reducers/sensordataReducer'
import DataChart from './components/DataChart'
import { Divider } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  async componentDidMount() {
    try {
      await this.props.initData()
    } catch (e) {
      alert(e)
    }
  }
  render() {
    return (
      <div className="App">
        {this.props.data.isFetching &&
          <div>
            LOADING
          </div>
        }
        {!this.props.data.isFetching &&
          <div>
            <Divider horizontal>Sensor 1</Divider>
            <DataChart props={this.props} sensor={'sensor1'} />
            <Divider horizontal>Sensor 2</Divider>
            <DataChart props={this.props} sensor={'sensor2'} />
            <Divider horizontal>Sensor 3</Divider>
            <DataChart props={this.props} sensor={'sensor3'} />
            <Divider horizontal>Sensor 4</Divider>
            <DataChart props={this.props} sensor={'sensor4'} />
            <Divider horizontal></Divider>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = {
  initData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
