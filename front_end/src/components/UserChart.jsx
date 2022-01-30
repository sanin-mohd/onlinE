import React from 'react';
import {Bar} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)
const state = {
  labels: ['Python', 'Java', 'Node.js',
           'React.js', 'Angular'],
  datasets: [
    {
      label: 'My Courses',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class UserChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
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