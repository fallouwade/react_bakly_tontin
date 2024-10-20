import React from 'react';     
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Enregistrement des éléments nécessaires
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);
          
const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

const data = {
  labels: xValues,
  datasets: [{
    fill: true,
    tension: 0, // Utilisez tension pour la courbe
    backgroundColor: "rgba(9,53,69,5)",
      borderColor: "rgba(32,223,127,1)",
    data: yValues
  }]
};

const options = {
  plugins: {
    legend: {
      display: false
    }

  },
   responsive: true,
  maintainAspectRatio: true,
 
};

class Diagramme1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: []
    };
  }

  render() {    
    return (
      <div className="diagramme1">
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default Diagramme1;
