import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initData } from './reducers/sensordataReducer'
import DataChart from './components/DataChart'
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
    console.log(this.props)
    return (
      <div className="App">
        {this.props.data.isFetching &&
          <div>
            LOADING
          </div>
        }
        {!this.props.data.isFetching &&
          <div>
            <DataChart props={this.props} sensor={'sensor1'} />
            <DataChart props={this.props} sensor={'sensor2'} />
            <DataChart props={this.props} sensor={'sensor3'} />
            <DataChart props={this.props} sensor={'sensor4'} />
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
