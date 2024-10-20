import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/App.css';
import image from '/image/Savings.png'
import Diagramme1 from './diagramme1.jsx'
import Diagramme2 from './diagramme2.jsx'

class Chartsjs extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chart: []
    };
  }

  render(){    
    return(
      <div className="container-fluid my-5 ">
                <div className="row gy-3">
                    <div className="col-md-7 col-12">
                        <div className="card h-100 shadow">
                            <div className="card-header fw-semibold bg2">
                                Evaluation des cotisations en fonction du temps
                            </div>
                            <div className="card-body mt-3">
                                <div >
                                   <Diagramme1/>
                                </div>

                            </div>
                          </div>
                    </div>
                    <div className="col-md-5 col-12 ">
                        <div className="card h-100 shadow">
                            <div className="card-header fw-semibold bg2">
                                Statistiques
                            </div>
                            <div className="card-body  ">
                               <div >
                                   <Diagramme2/>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
          

      )
  }

}
export default Chartsjs