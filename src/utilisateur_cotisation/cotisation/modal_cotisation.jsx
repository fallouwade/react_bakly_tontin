import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/App.css';
import image from '/image/Savings.png'
import Modal from '../voir.jsx';
import tableau from '../../../public/tableau.json'


class Modal1 extends React.Component{
  constructor(props){
    super(props);
     this.state = {
       isModalOpen: false,
      currentUser: null, // Stocke les détails de l'utilisateur courant
      table: tableau.utilisateurs};
  }
  
   openModal = (user) => {
    this.setState({ isModalOpen: true, currentUser: user });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, currentUser: null });
  };
  
  render(){

     const { table, isModalOpen, currentUser } = this.state;
     console.log(table)
    
    return(
          <div className="container-fluid p-0    my-0">
            <div className="d-flex justify-content-end ">
           <button type="button" className="btn btn-sm  "  data-bs-toggle="modal" data-bs-target="#exampleModal">
               <i className="bi bi-three-dots text-success ps-2 pe-2 pt-0 pb-0  fs-2 rounded-3 bg-secondary h-25" ></i>
            </button>
            </div>

            <div className="modal fade mx-md-5 mx-0 cotisation" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg text-center container" >
                <div className="modal-content">
                  <div className="modal-header bg-success">
                    <h5 className="modal-title " id="exampleModalLabel">Cotisations terminés</h5>
                    
                  </div>
                  <div className="modal-body p-0 m-1">
                       <div className="container-fluid p-0  mt-3 ">
                                <table className="table   p-0 shadow " id="table3">
                                     <thead className="rounded-1 " >
                                        <tr className="table-success p-0
                                        ">
                                          
                                          <th scope="col" >Membres</th>
                                          <th scope="col">Date début</th>
                                          <th scope="col">Date Fin</th>
                                          <th scope="col">Montant total cotisé</th>
                                          <th scope="col">Statut</th>
                                          <th scope="col">Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody id="body1" className="rounded-5">
                                           {table.map((item, index) => (
                                        <tr key={index}>
                                          <td>{item.nomUtilisateur}</td>
                                          <td>{item.dateInscription}</td>
                                          <td>01/12/2024</td>
                                         
                                          <td>
                                            
                                              <small className="">{item.paiementsMensuels.reduce((a, b) => { return  a + b.montantPaye})}</small>
                                           
                                          </td>
                                          <td> termine </td>
                                          <td>
                                            <div className="d-flex align-items-center  justify-content-center">
                                              <button className="p-0 border-0 bg-white m-0" onClick={() => this.openModal(index)}>
                                                <i className="bi bi-eye"></i>
                                              </button>
                                             
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                                
                                      </tbody>
                                </table>
                      </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <Modal isOpen={isModalOpen} table= {table} onClose={this.closeModal} currentUser={currentUser}/>

          </div>

      )
  }

}
export default Modal1

