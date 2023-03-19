// import CanvasJSReact from './canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import { CanvasJSChart } from "canvasjs-react-charts";

const Chart = (props) => {

    console.log(props)

    const prods = [
        {y: (props.prod[0]/props.totalVisits*100).toFixed(2), label: props.title[0]},
        {y: (props.prod[1]/props.totalVisits*100).toFixed(2), label: props.title[1]},
        {y: (props.prod[2]/props.totalVisits*100).toFixed(2), label: props.title[2]},
        {y: (props.prod[3]/props.totalVisits*100).toFixed(2), label: props.title[3]},
        {y: (props.prod[4]/props.totalVisits*100).toFixed(2), label: props.title[4]},
        {y: (props.prod[5]/props.totalVisits*100).toFixed(2), label: props.title[5]}
    ]


    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "dark1", "dark2"
        title: {
            text: "Top visited products"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: prods
        }]
    }

    return (
        <div>
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}

export default Chart;        