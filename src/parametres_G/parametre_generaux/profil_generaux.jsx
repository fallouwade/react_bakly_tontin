import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/index.css';
import Profi from '../personne.jsx'


class Profil_generau extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profil: []
    };
  }

  render(){
    
    return(
          <div className="  mt-md-3 mt-0 col-12">
                 <h1 className="pt-md-5 pt-0 ps-0 pe-0 m-0 bg-light col-12">Parametre Generaux 1</h1>
             <div className="container">
                 
                 <div >
                    
                    <div className="container-fluid pt-md-5 pt-0 mt-md-5 mt-0 bg-white">
                      <div className="row">
                        <div className=" col-md-4 col-12  me-md-5 me-0 ps-sm-0 ps-5 d-flex border-end border-md-0  border-3 flex-column">
                            <div>
                              <Profi/>
                            </div>
                            <button className='btn btn-dark btn-sm  mt-4 col-6 ms-md-4 ms-4 mb-5'>Editer profil</button>    
                         
                        </div>
                       
                        <div className="col-12 col-md-7 container-fluid">
                                
                                 <div className="row">
                                    <h6 className=" fw-bold bg-success pt-1 pb-1">Informations Générals</h6>
                                 </div>
                                <div
                                    className="d-flex justify-content-between border-bottom pt-3">
                                    <div className="col-md-8">Prénom
                                    </div>
                                    <div className="col-md-4 text-center"><p id="info1">Ndiagua</p></div>
                                </div>
                                <div
                                    className="d-flex justify-content-between border-bottom pt-3">
                                    <div className="col-md-8">Nom
                                    </div>
                                    <div className="col-md-4 text-center"><p id="info2">Sall</p></div>
                                </div>
                                <div
                                    className="d-flex justify-content-between border-bottom pt-3">
                                    <div className="col-md-8">Statut
                                    </div>
                                    <div className="col-md-4 text-center "><p id="info3">Administrateur</p></div>
                                </div>
                                <div
                                className="d-flex justify-content-between  pt-3">
                                <div className="col-md-8">E-mail
                                </div>
                                <div className="col-md-4 text-center"><p id="info4">ndiagua@gmail.com</p></div>
                            </div>


                                
                             <div className="row">
                                 <h6 className=" fw-bold  mt-2 border-bottom bg-success pt-1 pb-1">Statistiques</h6>

                              </div>
                              <div
                                    className="d-flex justify-content-between  border-bottom pt-3">
                                    <div className="col-md-9"><p>Nombre de membre ajoutés</p>
                                    </div>
                                    <div className="col-md-4 text-center">25</div>
                                </div>
                                <div
                                    className="d-flex justify-content-between border-bottom pt-3">
                                    <div className="col-md-9">Nombre de membre archivés
                                    </div>
                                    <div className="col-md-4 text-center">10</div>
                                </div>
                                <div
                                    className="d-flex justify-content-between  pt-3">
                                    <div className="col-md-9">Nombre de membre bloqués
                                    </div>
                                    <div className="col-md-4 text-center">4</div>
                                </div>
                        </div>
                      </div>
                      </div>
                    </div>
                 </div>
          </div>

      )
  }

}
export default Profil_generau