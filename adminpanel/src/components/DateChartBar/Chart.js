import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {CategoryScale, Chart, registerables} from "chart.js"
Chart.register(...registerables);

const lineChartData = {
    labels: ["October", "November", "December"],
    datasets: [
        {
            data: [8137119, 9431691, 10266674],
            label: "",
            backgroundColor: "rgba(0, 0, 255, 1)",
            fill: true
        }
    ]
};

export default class ChartBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <Bar
                type="bar"
                options={{
                    scales: {
                        y: {
                            bounds: "ticks",
                            border: {dash: [4, 4], dashOffset: 1}, // for the grid lines
                            grid: {
                                color: '#aaa', // for the grid lines
                                offset: false,
                                drawTicks: false, // true is default
                                drawOnChartArea: true, // true is default

                            },
                            ticks: {
                                color: '#00000A'
                            },
                            beginAtZero: true,
                        },
                        x: {
                            grid: {
                                drawTicks: true,
                                tickWidth: 2,
                                offset: false,
                                drawOnChartArea: false,
                            },
                            ticks: {
                                color: '#00000A'
                            },
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }}
                data={lineChartData}
            />
        );
    }
}