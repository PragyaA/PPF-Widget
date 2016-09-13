(function () {
  	'use strict';
	angular
            .module('firstApplication', ['ngMaterial'])
            
    })();

var data = [{
      key: 1,
      amount: 10000,
      interest: 10081
    }, {
      key: 2,
      amount: 20000,
      interest: 22496
    }, {
      key: 3,
      amount: 30000,
      interest: 35128
    }, {
      key: 4,
      amount: 40000,
      interest: 48783
    }, {
      key: 5,
      amount: 50000,
      interest: 63545
    }, {
      key: 6,
      amount: 60000,
      interest: 79502
    }, {
      key: 7,
      amount: 70000,
      interest: 96751
    }, {
      key: 8,
      amount: 80000,
      interest: 115398
    }, {
    	key: 9,
    	amount: 90000,
      	interest: 135555
    }, {
    	key: 10,
    	amount: 100000,
      	interest: 157345
    }]; 

    var margin = {
      top: 10,
      right: 41,
      bottom: 42,
      left: 10
    };

    var width = 400 - margin.left - margin.right,
      height = 250 - margin.top - margin.bottom;

    var y = d3.scale.linear()
      .domain([0, d3.max(data, function(d) {
        return d.interest
      })])
      .range([height, 0]);

    var x = d3.scale.linear()
      .domain([0, d3.max(data, function(d) {
        return d.key;
      }) + 1])
      .rangeRound([0, width]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    var chart = d3.select(".chart#chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("margin-left", 15 + "px");


    chart.append("defs")
      .append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height);

    chart.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("clip-path", "url(#clip)")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d.key);
      })
      .attr("y", function(d) {
        return y(d.interest);
      })
      .attr("height", function(d) {
        return height - y(d.interest);
      })

      .attr("width", x(0.5))
      .style("stroke", "white")
      .append("title")
      .text(function(d) {
        return d.key;
      });

    chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    chart.append("text") //Add chart title
      .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom) + ")")
      .style("text-anchor", "middle")
      .text("Amount per year");

    chart.append("g")
      .attr("class", "y axis")
      .call(yAxis);