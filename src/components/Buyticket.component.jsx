import React from "react";
import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'

import $ from 'jquery';
import { Cardcontent } from "./Cardcontent.component";
export const Buyticket = ()=>
{

    const closeFirstPopup = (event) =>
    {
        $('#myModal').modal('hide')
        

    }
    return(
        

<div>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

    
      <div className="modal-header text-center border-0">
    
        <h4 className="modal-title offset-3 offset-md-4" style={{ color:'black' }}>RGD Design</h4>
    
        
        
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      
      </div>
      <p className="modal-title " style={{ color:'black',fontSize:'smaller' }}>21 sep,2021</p>
      <p className="modal-title " style={{ color:'black',fontSize:'smaller' }}>Tickets Available: <span className="text-warning">22</span></p>
        <div className="border-bottom"></div>

      
      <div className="modal-body">
      <form>
  <div className="form-group row">
    <label for="exampleInputEmail1 col-3 col-md-12">Name</label>
    <input type="text" className="form-control col-md-12 col-12 rounded-0" />
    
  </div><div className="form-group row">
    <label for="exampleInputEmail1 col-3 col-md-12">Email</label>
    <input type="email" className="form-control col-md-12 col-12 rounded-0" />
    
  </div>
  <div className="form-group row">
    <label for="exampleInputEmail1 col-3 col-md-12">Mobile</label>
    <input type="number" className="form-control col-md-12 col-12 rounded-0" />
    
  </div>
  {/* Attendies */}
  
   <div className="form-group row">
    <label for="exampleInputEmail1 col-12 col-md-12">Attendies</label>
    </div>
    <div className="row mb-2 ">
    <span className="col-md-2 col-2">1</span>
    <input type="text" className="form-control col-md-10 col-10 rounded-0" placeholder="First name Last name" />
    
  </div>
  <div className="form-group row mb-5">
    <div className=" col-md-12 col-12 justify-content-end text-right">
    <button type="button" className="form-control rounded-0 text-warning text-right border-0" >+ Add An Attendee</button>
    </div>
    
  </div>
  <div className="row">
      <div className="col-md-6">
          <a  data-dismiss="modal"  data-toggle="modal" data-target="#confirmationModal" href="javascript:void(0)" className="btn btnOrange text-white btn-block"> Book Tickets</a>
      </div>
      <div className="col-md-6"> 
      <button type="button" className="btn btnBorder bg-white text-white btn-block">Cancel</button>
      </div>
  </div>
 </form>
      </div>
{/* 
      
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div> */}

    </div>
  </div>
</div>
<div className="modal" id="confirmationModal">
  <div className="modal-dialog">
    <div className="modal-content">

    
      <div className="modal-header text-center">
    
        <p className="modal-title offset-3 offset-md-3" style={{ color:'black' }}>You have booked <span className="text-warning">3</span><span className=""> tickets </span>for</p>
    
        
        
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      
      </div>
      

      
      <div className="modal-body">

          <h5 style={{ color:'black' }}>RGD Design and co.</h5>
          <p style={{ color:'black' }}>21 sept,2021.</p>
          <div className="border-bottom mb-5"></div>
          <div className="row justify-content-center">
      <div className="col-md-6">
          <a  data-dismiss="modal"  data-toggle="modal" data-target="#confirmationModal" href="javascript:void(0)" className="btn btnOrange text-white btn-block"> Make Payment</a>
      </div>
      <div className="col-md-6"> 
      <button type="button" className="btn btnBorder bg-white text-white btn-block">Cancel</button>
      </div>
  </div>
      </div>

      
      
  
      

    </div>
  </div>
</div>
</div>
    )
}