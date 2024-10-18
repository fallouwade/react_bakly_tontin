import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/App.css';
import Profi from '../personne.jsx'


class Profil extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profil: []
    };
  }

  render(){
   
    return(
          <div classNameName="container-fluid    my-5">
               <div   className=" bg-light mt-md-5 mt-0" >
                <h1 className="pt-md-5 pt-0">Parametre Generaux 1</h1>
                <div className=" mt-4 bg-white p-3">
                  <div className="row container-fluid">
                    <div className="col-md-5 col-12 text-center mb-5 container-fluid ">
                      <Profi />
                    </div>
                    <div className="col-md-6 col-12 container-fluid">
                    <h3 className='fs-5 '>Informations Général </h3>
                      <form className="row g-3 ">
                        <div className="col-md-6">
                          <label  className="form-label">Prénom</label>
                          <input type="text" className="form-control" id="inputPrenom" required />
                        </div>
                        <div className="col-md-6">
                          <label  className="form-label">Nom</label>
                          <input type="text" className="form-control" id="inputNom" required />
                        </div>
                        <div className="col-md-12">
                          <label  className="form-label">Téléphone</label>
                          <input type="text" className="form-control" id="inputPhone" required />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">E-mail</label>
                            <input type="text" className="form-control" id="inputEmail" required />
                        </div>
                        <div className="col-md-12">
                          <label  className="form-label">Statut</label>
                          <input type="text" className="form-control" id="inputStatut" placeholder="Administrateur" required/>
                        </div>
                        <div className=" d-flex justify-content-end">
                            <button className="btn btn-primary text-white  p-1" type="submit" id="btn-jour">Mettre à jour</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
          </div>

      )
  }

}
export default Profil