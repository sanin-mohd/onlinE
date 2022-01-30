import React from 'react';
import {Line} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May','June', 'July', 'August', 'September'],
  datasets: [
    {
      label: 'Users',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [60, 115, 118, 125, 156,162,200,300,600]
    }
  ]
}

export default class AdminChartUsers extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
