import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {CategoryScale, Chart, registerables} from "chart.js"
Chart.register(...registerables);
const Charts = () => {
    const lineChartData = {
        labels: ["October", "November", "December"],
        datasets: [
            {
                data: [8137119, 9431691, 10266674],
                label: "",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true
            }
        ]
    };

    return (
        <Bar
            type="bar"
            options={{
                scales: {
                    y: {
                        bounds: "ticks",
                        border:{dash: [4, 4], dashOffset: 1}, // for the grid lines
                        grid: {
                            color: '#aaa', // for the grid lines
                            offset: false,
                            drawTicks: false, // true is default
                            drawOnChartArea: true, // true is default

                        },
                        beginAtZero: true,
                    },
                    x: {
                        grid: {
                            drawTicks: true,
                            tickWidth: 2,
                            offset: false,
                            drawOnChartArea: false,
                        }
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
};

export default Charts;