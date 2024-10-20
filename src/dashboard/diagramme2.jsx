import React from 'react';     
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import '../style/App.css';

// Enregistrement des éléments nécessaires
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const xValues = ["Terminer", "Archiver", "En cours", "Bloquer"];
const yValues = [55, 49, 44, 24];

const barColor = [
  "green",
  "blue",
  "pink",
  "#e8c3b9",
];

const data = {
  labels: xValues,
  datasets: [{
    backgroundColor: barColor,
    data: yValues,
  }]
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom', // Place la légende à droite
      labels: {
        boxWidth: 16, // Largeur de la boîte de la légende
        font: {
          size: 12, // Taille de la police
        }
      }
    },
  },
  cutout: '50%', // Ajuste l'ouverture au centre (diminuer l'épaisseur)
  responsive: true,
  maintainAspectRatio: false, // Permet de modifier le ratio
};

class Diagramme2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: []
    };
  }

  render() {    
    return (
      <div  className='diagramme2' > {/* Ajustez la taille ici */}
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}

export default Diagramme2;
