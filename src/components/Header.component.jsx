import React from 'react';
import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import '../header.scss';
import $ from 'jquery';
export const Header = ()=>{


  const openPane = () =>
  {
    
    $('#sidebar').addClass('active');
    $('.overlay').fadeIn();
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }
  const dismissPane = () =>
  {
    $('#sidebar').removeClass('active');
    $('.overlay').fadeOut();
  }

    return(
<div>
    
    <div className= {'row justify-content-center text-center w-100 '+ STYLES.BGwheat}>
      <div className="text-center"><img src={warning} width="20" height="20"/></div>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt, neque, 

    </div>
    
    <nav id="sidebar" className="d-md-none d-xl-none d-lg-none">
               

               <div class="sidebar-header">
                 <div className="row" >
                   <div className="col-4">
             <div id="dismiss text-center" >
                   <i class="fa fa-close mt-2 float-left" onClick={dismissPane}></i>
               </div>
                   </div>
                   <div className="col-4">
                   <h3>Logo</h3>
                   </div>
                   <div className="col-4">
             <div id="dismiss text-center" >
                   <i class="fa fa-sign-out mt-2 float-right" ></i>
               </div>
                   </div>
                   </div>
               </div>

               <ul class="list-unstyled components">
                   <p className="text-left">Dashboard</p>
                   <li class="active">
                       {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a> */}
                       <ul className="text-left list-group  ">
                           <li className="list-group-item bg-transparent border-0 text-left"><input className="bg-transparent  border-success acc border-left-0 border-top-0 border-right-0" placeholder="Account" /> </li>
                           <li className="list-group-item bg-transparent border-0 text-left"><a href="#">Help</a></li>
                           {/* <li><a href="#">Home 3</a></li> */}
                       </ul>
                   </li>
                   {/* <li>
                       <a href="#">About</a>
                       <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                       <ul class="collapse list-unstyled" id="pageSubmenu">
                           <li><a href="#">Page 1</a></li>
                           <li><a href="#">Page 2</a></li>
                           <li><a href="#">Page 3</a></li>
                       </ul>
                   </li> */}
                   {/* <li>
                       <a href="#">Portfolio</a>
                   </li>
                   <li>
                       <a href="#">Contact</a>
                   </li> */}
               </ul>

               {/* <ul class="list-unstyled CTAs">
                   <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a></li>
                   <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a></li>
               </ul> */}
           </nav>
        <nav className={'navbar navbar-expand-lg navbar-dark '+ STYLES.Navcolor}>
            { /*ORIGINAL <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <button className="navbar-toggler" type="button"   onClick={openPane}  >
    <span className="navbar-toggler-icon text-white"></span>
  </button>

  <a className="navbar-brand offset-md-1 offset-0" href="#">Logo</a>
  <div id="dismiss text-right" className="d-md-none d-lg-none d-xl-none logout-btn-mob" >
                   <i class="fa fa-sign-out mt-2 float-right" ></i>
               </div>

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