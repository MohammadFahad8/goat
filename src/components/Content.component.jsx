import React from "react";

import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import $ from 'jquery';

export const Content = ()=>{
    React.useEffect(()=>{
        
        $('input').on('focus',function(){
            $(this).siblings().removeClass('invisible');
            $(this).attr("placeholder", "")
            $(this).attr("placeholder", "")
          });
        $('input').on('blur',function(){
            $(this).siblings().addClass('invisible');
           
            var placehold=$(this).siblings('label').text()
            
            $(this).attr("placeholder", placehold)
          });
          
       
    },[])
    return(
        <div>
<div className="p-5">
    <div className="row">
        <div className="col-md-6"><img src={warning} /></div>
        <div className="col-md-6">
        <h1 className="text-left AccountHeading">MY ACCOUNT</h1>    
                <div className="form-group form-group-default required">
                     <label className="control-label invisible">Name</label>
                     <input type="text" name="project" id="project" className="form-control" required="" placeholder="Name"/>
                    <div className="invalid-feedback">Required</div>
                </div>
        
            <div className="row">
                <div className="col-md-6"> <div className="form-group form-group-default required">
                     <label className="control-label invisible">Mobile</label>
                     <input type="text" name="project" id="project" className="form-control" placeholder="Mobile" required=""/>
                    <div className="invalid-feedback">Required</div>
                </div></div>
                <div className="col-md-6"> <div className="form-group form-group-default required">
                     <label className="control-label invisible">Email</label>
                     <input type="email" name="project" id="project" className="form-control" required="" placeholder="Email"/>
                    <div className="invalid-feedback">Required</div>
                </div></div>
            </div>
        </div>
    </div>
    
</div>
<div className="mt-0 p-md-5 p-4 mt-md-5 ">
    <div className="text-center"><hr/></div>
    </div>
</div>


    )
}