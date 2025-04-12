import "./chartBox.scss";
import { Link } from "react-router-dom";
import React, { PureComponent } from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

console.log("in chart box procent:")



const ChartBox = (props)=> {
  console.log("ChartBox Props:", props.percentage); // Log all props to the console

  return (
    <div className="chartBox">
       <div className="boxInfo">
          <div className="title">
              <img src={props.icon}   alt="income"/>
              <span>{props.title}</span>
          </div>
          <h3> {props.number} $</h3>
          <Link to={"/"} >
              <span className="view">View All</span>
          </Link>
       </div>
          

          {/* Grafic */}
        <div className="chartInfo">
            <div className="chart">
              
            <ResponsiveContainer width="99%" height="99%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 5, y: 20 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
    
            </div>
            <div className="text">
            <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;