import React from "react";
import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import CORE from '../index.module.scss'
import $ from 'jquery';
import { Cardcontent } from "./Cardcontent.component";
import {Buyticket} from "./Buyticket.component";
export const Events = ()=>
{
    const elements = [1,2,3,4,5,6];
    
    return(
        <div className={CORE['p-5']}>
            <div className={[CORE['row'], CORE['mb-5']].join(" ")}> 
            <div className={[CORE['col-md-8'], CORE['col-sm-12']].join(" ")}>
            <div className={CORE['input-group']}>
 
<input className={[CORE['rounded-0'], CORE['border-0'] ,CORE['bg-white'] ,CORE['form-control']].join(" ")} placeholder="Search by Event Title"/>
<span className={CORE['mt-1']} style={{ position: 'inherit',marginLeft: '-30px'
 }}>
    <i className={CORE['fa fa-search']} aria-hidden="true"></i>
  </span>
            </div>
            </div>

            </div>
            {/* END SEARCH BAR */}

            <div className={[CORE['p-0'], CORE['bg-white']].join(" ")}>
<div className={CORE['p-5']}>
    <h1 className={[CORE['textLeft'], CORE['mb-4']].join(" ")} style={{ color:'black',fontWeight:'800' }}>Events <span className={CORE['h5']} style={{ color:'black' }}>(6)</span></h1>
                <div className={CORE['row']}>
                    
                      {/* place card here */}
                    {
                        elements.map((row,index)=>(
                            <Cardcontent prosome={index} />
                        ))
                    }
{/*                       
                      <Cardcontent />
                      <Cardcontent />
                      <Cardcontent />
                      <Cardcontent />
                      <Cardcontent /> */}
                    
                </div>
                </div>

            </div>
            <Buyticket/>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Open modal
</button> */}

        </div>
    )
}