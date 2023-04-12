import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import {useState} from 'react'
import "./FinanceChart.css"

const FinanceChart = () => {

  const [chartType, setChartType] = useState('week')

  const handleChartType = (e) => {
    setChartType(e.target.value)
  }

  const dataWeek = {

    labels:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
      label: "Sales Amount",
      data: [1000, 200, 30, 450, 500, 220, 500],
      backgroundColor:  'rgba(4, 44, 53)',
      borderColor: 'rgba(4, 44, 53)',
      borderWidth: 1,
      }
    ]
  }

  const optionsWeek = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          }
        }
      ]
    }
  } 

  const dataMonth = {

    labels:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
      label: "Sales Amount",
      data: [1000, 200, 30, 450, 500, 220, 400, 2000, 600, 100, 70, 300],
      backgroundColor:  'rgba(4, 44, 53)',
      borderColor: 'rgba(4, 44, 53)',
      borderWidth: 1,
      }
    ]
  }

  const optionsMonth = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          }
        }
      ]
    }
  } 

  const dataYear = {

    labels:["2020", "2021", "2022", "2023"],
    datasets: [
      {
      label: "Sales Amount",
      data: [100000, 150000, 220000, 450000],
      backgroundColor:  'rgba(4, 44, 53)',
      borderColor: 'rgba(4, 44, 53)',
      borderWidth: 1,
      }
    ]
  }

  const optionsYear = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          }
        }
      ]
    }
  } 
  return (

    <div>
      <div className="chart-container">
        <div className="chart-container-header">
                <div className="sub-topic">
                  <h4 className="h4">Sales Growth</h4>
                </div>
                <div className="dropdown-container">
                    <label className="label">Type</label>
                    <select className="select" value={chartType} onChange={handleChartType}>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="year">Year</option>
                    </select>
                </div>
        </div>
        <div className="chart-container-body">

          {chartType === 'week' && (
            <Bar
            data={dataWeek} 
            height={590}
            width={1500}
            options={optionsWeek}
            />
          )}

          {chartType === 'month' && (
            <Bar
            data={dataMonth} 
            height={590}
            width={1500}
            options={optionsMonth}
            />
          )}

          {chartType === 'year' && (
            <Bar
            data={dataYear} 
            height={590}
            width={1500}
            options={optionsYear}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default FinanceChart
