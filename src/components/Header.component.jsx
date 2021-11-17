import React from 'react';
import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import $ from 'jquery';
export const Header = ()=>{


  

    return(
<div>
    
    <div className= {'row justify-content-center text-center w-100 '+ STYLES.BGwheat}>
      <div className="text-center"><img src={warning} width="20" height="20"/></div>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt, neque, 

    </div>
        <nav className={'navbar navbar-expand-lg navbar-light '+ STYLES.Navcolor}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand offset-1" href="#">Navbar</a>

  <div className="collapse navbar-collapse justify-content-end p-3 ml-n2" id="navbarNavDropdown">
    <ul className="navbar-nav me-auto">
      <li className="nav-item active p-2">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item p-2">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item p-2">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item p-2">
        <a className="nav-link" href="#">Logout</a>
      </li>
    
    </ul>
  </div>
  <div className={STYLES.hackdiv}>
  <div >fdfs</div>
  <div>fdfs</div>
  <div>fdfs</div>
  </div>
</nav>
</div>
    )


    
}