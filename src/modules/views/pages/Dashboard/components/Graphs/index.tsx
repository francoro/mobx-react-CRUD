import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const dataCPU = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const dataMemory = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const dataInternet = [
    {
        name: 'User A',
        gigabytes: 24
    },
    {
        name: 'User B',
        gigabytes: 30
    },
    {
        name: 'User C',
        gigabytes: 50
    },
    {
        name: 'User D',
        gigabytes: 90
    },
    {
        name: 'User E',
        gigabytes: 12
    },
    {
        name: 'User F',
        gigabytes: 4
    },
    {
        name: 'User G',
        gigabytes: 40
    },
];

export const Graphs = () => {


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabelPie = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <h3> CPU </h3>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={dataCPU}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
            </PieChart>
            <h3>Memory</h3>
            <PieChart width={400} height={400}>
                <Pie
                    data={dataMemory}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabelPie}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {dataMemory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <h3>Internet</h3>
            <BarChart
                width={500}
                height={300}
                data={dataInternet}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="gigabytes" fill="#82ca9d" minPointSize={10} />
            </BarChart>
        </>
    )
}

