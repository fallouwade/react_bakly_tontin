import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css';
import image from '../../image/Savings.png'


class Profi extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profil: []
    };
  }

  render(){
   
    return(
          <div classNameName="container    my-3">
            <div className="row container">
              <div className="col">
                 <div className=" ">
                  <p className="text-muted  ">Profil</p>
                   <img src="/image/Ellipse 9.png" alt="" className="rounded-circle ms-sm-5 ms-md-3 ms-lg-0 img-profile col-7" />
                  </div>
                  <div className="row container ">
                        <h3 className=" mx-2 fs-md-3 fs-4  vert">Ndiagua Sall</h3>
                        <h5 className=" ps-3 vert ">Admin</h5> 
                      </div>
                  </div>
                  
            </div>
          </div>

      )
  }

}
export default Profi