import "./chartBox.scss";

import { Link } from "react-router-dom";


import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';







const ChartBox = (props)=> {



  return (
    <div className="chartBox">
       <div className="boxInfo">
        <div className="title">
            <img src={props.icon} alt="income"/>
            <span>{props.title}</span>
        </div>
         <h3> {props.number} $</h3>
         <Link to={"/"} style={{color:props.color}}>
            View All
         </Link>
       </div>


        <div className="chartInfo">
            <div className="chart">
            <ResponsiveContainer width="99%" height="99%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 90 }}
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