
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis, } from 'recharts';

const MyBarChart = () => {
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data))

    }, [])
    return (
        <div>
            <div>
            <BarChart width={730} height={250} data={chart}>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="investment"></Bar>
                <Tooltip></Tooltip>
            </BarChart>
            </div>
                <div>
                    <LineChart width={800} height={400} data={chart}>
                        <Line dataKey="sell"></Line>
                        <Line dataKey="investment"></Line>
                        <XAxis datakey="month"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
        </div>
    );
};

export default MyBarChart;