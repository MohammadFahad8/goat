import React from "react";

import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import {Details} from './Details.component';
import CORE from '../index.module.scss'
import UserImage from '../utils/images/Image.png'
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
<div className={CORE['p-5']}>
    <div className={CORE['row']}>
        <div className={CORE['col-md-6']}><img className={[CORE['img-thumbnail'], CORE['w-50']].join(" ")} src={UserImage} /></div>
        <div className={CORE['col-md-6']}>
        <h1 className={CORE['textLeft'] +' '+'AccountHeading'}>MY ACCOUNT</h1>    
                <div className={[CORE['form-group'], CORE['form-group-default'], CORE['required']].join(" ")}>
                     <label className={[CORE['control-label'],CORE['invisible']].join(" ")}>Name</label>
                     <input type="text" name="project" id="project" className={CORE['form-control']} required="" placeholder="Name"/>
                    <div className={CORE['invalid-feedback']}>Required</div>
                </div>
        
            <div className={CORE['row']}>
                <div className={CORE['col-md-6']}> <div className={[CORE['form-group'], CORE['form-group-default'], CORE['required']].join(" ")}>
                     <label className={[CORE['control-label'], CORE['invisible']].join(" ")}>Mobile</label>
                     <input type="text" name="project" id="project" className={CORE['form-control']} placeholder="Mobile" required=""/>
                    <div className={CORE['invalid-feedback']}>Required</div>
                </div></div>
                <div className={CORE['col-md-6']}> <div className={[CORE['form-group'], CORE['form-group-default'], CORE['required']].join(" ")}>
                     <label className={[CORE['control-label'], CORE['invisible']].join(" ")}>Email</label>
                     <input type="email" name="project" id="project" className={CORE['form-control']} required="" placeholder="Email"/>
                    <div className={CORE['invalid-feedback']}>Required</div>
                </div></div>
            </div>
        </div>
    </div>
    
</div>
<div className={[CORE['mt-0'], CORE['p-md-5'], CORE['p-4'] ,CORE['mt-md-5']].join(" ")}>
    <div className={CORE['textCenter']}><hr/></div>
    </div>
    <Details/>
</div>


    )
}