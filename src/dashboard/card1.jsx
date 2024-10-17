import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css';
import image from '../../image/Savings.png'


class Card1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     mois: new Date().getMonth(),
      monthNames : [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ]
    };
  }

  render(){
    const index = this.state.mois
    const table= this.props.table.map(item=> item.paiementsMensuels);
    const table1= table.map(item=>{
     return item.map(items=>{
        return items.montantPaye
      })
    })
   
    const total1= table1.map(item=>{
      return item[item.length -1] 
    })
    const total2= table1.map(item=>{
      return item[item.length -2] 
    })
      const total3= table1.map(item=>{
      return item.reduce((a,b)=>{
        return a + b
      })
    })
     


    return(
           <div className="container-fluid  px-3  mt-md-5 mt-0 pt-md-5 pt-2 ">
                <div className="row d-flex justify-content-between  gy-3   ">
                    <div className="col-12 col-md-6 col-lg-3  d-flex justify-content-center">
                        <div className="card shadow bg-white col-12">
                            <div className="card-body ">
                              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary"> {this.state.monthNames[index]} </h6>
                              <p className="card-text fw-bold"> {total1.reduce((a,b)=> a+ b )} FCFA</p>
                              <h6 className="card-subtitle mb-2 text-body-secondary">
                                Nombres de cotisation: 

                               
                            </h6>
                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                        <div className="card shadow bg-white col-12">
                            <div className="card-body">
                              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary">  {this.state.monthNames[index-1]} </h6>
                              <p className="card-text fw-bold">{total2.reduce((a,b)=> a+ b )} FCFA</p>
                              <h6 className="card-subtitle mb-2 text-body-secondary">
                                Nombres de cotisation:
                            </h6>
                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
                        <div className="card w-100 d-flex justify-content-center align-items-center flex-row px-2 shadow bg-white col-12">
                            <div><img src={image} /></div>
                            <div className="card-body">
                              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary">{this.props.caisse}</h6>
                              <p className="card-text ">
                                <span className="text-body-secondary">{total3.reduce((a,b)=> a+ b )} FCFA</span>
                                <span className="fw-bold"> /5300 FCFA</span>
                              </p>
                                <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                  <div className="progress-bar bg-success" style={{width:'15%'}}></div>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>

      )
  }

}
export default Card1