import React, { Component } from 'react';
import * as d3 from 'd3';
import './donut.css';

const data = [
      {name: 'cats', count: 3, percentage: 2, color: '#000000', title:'Urban Scientist Planner'},
      {name: 'dogs', count: 10, percentage: 8, color: '#f8b70a'}
    ];
    const totalCount = 112;

    const width = 440,
    height = 400,
    radius = 200;

		const arc = d3.arc()
    	.outerRadius(radius - 10)
    	.innerRadius(150);

		const pie = d3.pie()
	    .sort(null)
	    .value(function(d) {
	        return d.count;
	    });

class DonutChart extends Component {

  componentDidMount() {
    const svg = d3.select(this.refs.donut).append('svg')
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 5 + "," + height / 5 + ")");

    const g = svg.selectAll(".arc")
      .data(pie(data))
      .enter().append("g");

   	g.append("path")
    	.attr("d", arc)
      .style("fill", function(d,i) {
      	return d.data.color;
      });


}

  render() {
    return (
      <div ref="donut"></div>
    );
  }
}

export default DonutChart;
