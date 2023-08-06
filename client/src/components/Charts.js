import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({past7daysdata}) => {

  console.log(past7daysdata);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const date = past7daysdata.map( el => el.date)
  const dateWiseCount = past7daysdata.map( el => el.count)
  
  const labels = date;
  // const labels = [
  //   "Day 1",
  //   "Day 2",
  //   "Day 3",
  //   "Day 4",
  //   "Day 5",
  //   "Day 6",
  //   "Day 7",
  // ];
  const data = {
    labels,
    datasets: [
      {
        label: "Search Results",
        data: dateWiseCount,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div>
      <h3>Search Results Over the Last 7 Days</h3>
      <div style={{ height: "350px", position: "relative" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Charts;
