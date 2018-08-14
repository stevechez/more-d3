import React, { Component } from 'react';
import * as d3 from 'd3';

class PieChart extends Component {

  componentWillMount() {
    d3.csv("data.csv");
    console.log('test');
  }

  render() {
    return (
      <h1>Pie Chart</h1>
    );
  }
}

export default PieChart;
