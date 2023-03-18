// import { chartsConfig } from "@/configs";

// const websiteViewsChart = {
//   type: "bar",
//   height: 220,
//   series: [
//     {
//       name: "Views",
//       data: [1000, 20, 10, 22, 50, 10, 40],
//     },
//   ],
//   options: {
//     ...chartsConfig,
//     colors: "#fff",
//     plotOptions: {
//       bar: {
//         columnWidth: "16%",
//         borderRadius: 5,
//       },
//     },
//     xaxis: {
//       ...chartsConfig.xaxis,
//       categories: ["M", "T", "W", "T", "F", "S", "S"],
//     },
//   },
// };

// const dailySalesChart = {
//   type: "line",
//   height: 220,
//   series: [
//     {
//       name: "Sales",
//       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//     },
//   ],
//   options: {
//     ...chartsConfig,
//     colors: ["#fff"],
//     stroke: {
//       lineCap: "round",
//     },
//     markers: {
//       size: 5,
//     },
//     xaxis: {
//       ...chartsConfig.xaxis,
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//   },
// };

// const completedTasksChart = {
//   ...dailySalesChart,
//   series: [
//     {
//       name: "Tasks",
//       data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
//     },
//   ],
// };

// export const statisticsChartsData = [
//   {
//     color: "blue",
//     title: "Food stats",
//     description: "Last Campaign Performance",
//     footer: "updated recently",
//     chart: websiteViewsChart,
//   },
//   {
//     color: "pink",
//     title: "Daily Sales",
//     description: "15% increase in today sales",
//     footer: "updated 4 min ago",
//     chart: dailySalesChart,
//   },
//   {
//     color: "green",
//     title: "Completed Tasks",
//     description: "Last Campaign Performance",
//     footer: "just updated",
//     chart: completedTasksChart,
//   },
// ];

// export default statisticsChartsData;



import axios from "axios";

import { chartsConfig } from "@/configs";






const websiteViewsChart = {
    type: "bar",
    height: 220,
    series: [
      {
        name: "Views",
        data: [],
      },
    ],
    options: {
      ...chartsConfig,
      colors: "#fff",
      plotOptions: {
        bar: {
          columnWidth: "16%",
          borderRadius: 5,
        },
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: [],
      },
    },
  };
  
  const dailySalesChart = {
    type: "line",
    height: 220,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      ...chartsConfig,
      colors: ["#fff"],
      stroke: {
        lineCap: "round",
      },
      markers: {
        size: 5,
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };
  
  const completedTasksChart = {
    ...dailySalesChart,
    series: [
      {
        name: "Tasks",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
    ],
  };
  let overall = [];


async function fetchData() {
  try {
    const response = await axios.get("http://localhost:4000/careplaceDetails/all");
    overall = response.data;
    const categories = overall.map((data) => data.supid);
    const staffsize = overall.map((data) => data.staffsize);
    
    console.log(categories);
    console.log(staffsize);
    websiteViewsChart.options.xaxis.categories = categories;
    websiteViewsChart.series[0].data = staffsize;
  } catch (error) {
    console.log(error);
  }
}

fetchData();
  export const statisticsChartsData = [
    {
      color: "blue",
      title: "Food stats",
      description: "Last Campaign Performance",
      footer: "updated recently",
      chart: websiteViewsChart,
    },
    {
      color: "pink",
      title: "Daily Sales",
      description: "15% increase in today sales",
      footer: "updated 4 min ago",
      chart: dailySalesChart,
    },
    {
      color: "green",
      title: "Completed Tasks",
      description: "Last Campaign Performance",
      footer: "just updated",
      chart: completedTasksChart,
    },
  ];
  
 
export default statisticsChartsData;
