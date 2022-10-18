import "./App.css";
import CanvasJSReact from "./assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function App() {
  const options = {
    animationEnabled: true,
    title: {
      text: "Monthly Sales - 2017",
    },
    axisX: {
      valueFormatString: "",
    },
    axisY: {
      title: "Sales (in USD)",
      prefix: "$",
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: 0, y: 25060 },
          { x: 1, y: 27980 },
          { x: 2, y: 42800 },
          { x: 3, y: 32400 },
          { x: 4, y: 35260 },
          { x: 5, y: 33900 },
          { x: 6, y: 40000 },
          { x: 7, y: 52500 },
          { x: 8, y: 32300 },
          { x: 9, y: 42000 },
          { x: 10, y: 37160 },
          { x: 11, y: 38400 },
        ],
      },
    ],
  };

  return (
    <div className="App">
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
}

export default App;
