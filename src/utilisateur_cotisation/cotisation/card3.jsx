import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';
import image from '/image/Savings.png'



class Card3 extends React.Component{
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
          <div className="container  px-5  ">
              <div className="row d-flex justify-content-between  gy-3  ">
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card  shadow col-12">
                          <div className="card-body">
                            <p className="card-title">{this.state.monthNames[index]} </p>
                            <h5 className="fw-bold">
                               {total1.reduce((a,b)=> a+ b )} FCFA
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card shadow col-12">
                          <div className="card-body">
                           <p className="card-title"> {this.state.monthNames[index-1]} </p>
                            <h5 className="fw-bold">
                                {total2.reduce((a,b)=> a+ b )} FCFA
                            </h5>
                            
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
                        <div className="card shadow col-12">
                          <div className="card-body">
                             <p className="card-title" >Total Caisse</p>
                        
                                <h5  className="fw-bold ">{total3.reduce((a,b)=> a+ b )} FCFA</h5>
                
                            <div >
                                <small className="progress" role="progressbar" style={{width:'100%', height:'7px'}} aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small className="progress-bar bg-success" style={{width:'100px'}} ></small>

                                 </small> 
                                  <small className="d-flex justify-content-end" id="seuil_pourcentage" >0%</small>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                      </div>
          </div>

      )
  }

}
export default Card3