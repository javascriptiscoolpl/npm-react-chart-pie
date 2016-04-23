import React from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";
import rcl from "react-chart-pie";

// sample usage 1
/*
var chart = { msg: "test chart", osX: [], osY: [] };
for (var i=0,x=0; i<5; i++,x++) {
  chart.osX[i] = "id "+x;
  chart.osY[i] = x+5;
}

ReactDOM.render(
  <rcl.ChartPie data={chart}/>,
  document.getElementById('app')
);
*/

// sample usage 2
function setRandomChart() {
  var chart = { msg: "testing random chart", osX: [], osY: [] };
  for (var i=0,x=0; i<8; i++,x++) {
    chart.osX[i] = "id "+x;
    chart.osY[i] = x*Math.random();
  }
  ReactDOM.render(
    <rcl.ChartPie data={chart}/>,
    document.getElementById('app')
  );
}
setInterval(() => { setRandomChart() }, 5000);
