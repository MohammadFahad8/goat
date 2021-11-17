import React from "react";
import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import $ from 'jquery';
export const Details =() =>{


    return(

        <div className="p-5">
            <div className="text-left text-dark">
            <h1 className="selectconfig">Select Configuration</h1>
            </div>
            <div className="row mt-5">
                <div className="col-md-1 col-1 float-right">
                <input class="form-check-input mt-3" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className="col-md-11 col-12">
            <div class="form-check">
            
            <div className="form-control float-right rounded-0 p-4">
            <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
            </div>
                </div>
</div>

            </div>
            <div className="row">
                <div className="col-md-1 col-1 float-right">
                <input class="form-check-input mt-3" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className="col-md-11 col-12">
            <div class="form-check">
            
            <div className="form-control float-right rounded-0 p-4">
            <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
            </div>
                </div>
</div>

            </div>

            <div className="row">
                <div className="col-md-1 col-1 float-right">
                <input class="form-check-input mt-3" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className="col-md-11 col-12">
            <div class="form-check">
            
            <div className="form-control float-right rounded-0 p-4">
            <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
            </div>
                </div>
</div>

            </div>
            <div className="row">
                <div className="col-md-1 col-1 float-right">
                <input class="form-check-input mt-3" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className="col-md-11 col-12">
            <div class="form-check">
            
            <div className="form-control float-right rounded-0 p-4">
            <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
            </div>
                </div>
</div>

            </div>

            {/* Footer buttons */}


            <div className="row mt-5">
            <div className="row">

               
<div className="col"></div>
<div className="col"></div>
</div>
            <button className={'btn  offset-0 offset-md-1 mb-3 mb-md-0  btnOrange  '+ STYLES.customBtnLevel}><i class="fa fa-exchange "><span className="ml-2">Update Configuration</span></i></button>
           <div className="row">

               
               <div className="col"></div>
               <div className="col"></div>
           </div>
            <button  className={'btn btnBorder '+ STYLES.customBtnLevel}><i class="fa fa-close "></i><span className="ml-2">Cancel</span></button>
            </div>
            
        </div>
    )
}