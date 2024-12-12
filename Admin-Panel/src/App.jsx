import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";

const App = () => {
  const theme = useTheme();

  const salesData = [
    { date: "2024-12-01", sales: 1200 },
    { date: "2024-12-02", sales: 1500 },
    { date: "2024-12-03", sales: 1800 },
    { date: "2024-12-04", sales: 2000 },
    { date: "2024-12-05", sales: 1700 },
    { date: "2024-12-06", sales: 2200 },
    { date: "2024-12-07", sales: 2100 },
  ];

  const chartData = {
    labels: salesData.map((data) => data.date),
    datasets: [
      {
        label: "Daily Sales",
        data: salesData.map((data) => data.sales),
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `₹${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales (₹)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div id="main">

    <Header/>
    <div style={{padding:'2rem',marginTop:'3rem'}}>
      <Grid container spacing={4}>
        {[
          { label: "Total Orders", value: 200, color: "#4caf50" },
          { label: "Revenue", value: "₹75,000", color: "#2196f3" },
          { label: "Pending Orders", value: 25, color: "#ff9800" },
          { label: "Active Users", value: 150, color: "#9c27b0" },
        ].map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card style={{ borderLeft: `5px solid ${stat.color}` }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {stat.label}
                </Typography>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div style={{ marginTop: theme.spacing(4) }}>
        <FormControl style={{ minWidth: 120, marginBottom: theme.spacing(2) }}>
          <InputLabel id="filter-label">Filter</InputLabel>
          <br />
          <Select labelId="filter-label" value={"week"}>
            <MenuItem value="week">This Week</MenuItem>
            <MenuItem value="month">This Month</MenuItem>
            <MenuItem value="year">This Year</MenuItem>
          </Select>
        </FormControl>

        <Line data={chartData} options={chartOptions} />
      </div>
      </div>
    </div>
  );
};

export default App;
