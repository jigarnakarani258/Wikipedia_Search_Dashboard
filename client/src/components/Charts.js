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
import "./../styles/Charts.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ past7daysdata, past1daysdata }) => {
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

  let labels, data;
  if (past7daysdata) {
    const date = past7daysdata.map((el) => el.date);
    const dateWiseCount = past7daysdata.map((el) => el.count);

    labels = date;
    data = {
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
  } else {
    const hour = past1daysdata.map((el) => el.hour);
    const hourWiseCount = past1daysdata.map((el) => el.count);

    labels = hour;
    data = {
      labels,
      datasets: [
        {
          label: "Search Results",
          data: hourWiseCount,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }

  return (
    <div>
      <div className="chart-container">
        <Line className="line-chart" options={options} data={data} />
      </div>
    </div>
  );
};

export default Charts;
