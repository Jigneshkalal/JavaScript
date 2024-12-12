import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const Home = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h1 className=" text-dark">ADMIN DASHBOARD</h1>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card-icon" /> PRODUCTS
          </div>
          <div>
            <h1>300</h1>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className="card-icon" /> Categories
          </div>
          <div>
            <h1>12</h1>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Customer</h3>
            <BsPeopleFill className="card-icon" /> Customer
          </div>
          <div>
            <h1>33</h1>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Alerts</h3>
            <BsFillBellFill className="card-icon" /> Alerts
          </div>
          <div>
            <h1>42</h1>
          </div>
        </div>
      </div>

      <div className="charts">
        {/* Bar Chart */}
        <div style={{ width: "100%", height: "400px", marginBottom: "20px" }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
};

export default Home;
