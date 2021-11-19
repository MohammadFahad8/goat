import React from "react";
import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import CORE from '../index.module.scss'
import $ from 'jquery';
export const Details =() =>{


    return(

        <div className={CORE['p-5']}>
            <div className={[CORE['textLeft'], CORE['text-dark']].join(" ")}>
            <h1 className="selectconfig">Select Configuration</h1>
            </div>
            <div className={[CORE['row'], CORE['mt-5']].join(" ")}>
                <div className={[CORE['col-md-1'], CORE['col-1'] ,CORE['float-right']].join(" ")}>
                <input className={[CORE['form-check-input'], CORE['mt-3']].join(" ")} type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className={[CORE['col-md-11'], CORE['col-12']].join(" ")}>
            <div className={CORE['form-check']}>
            
            <div className={[CORE['form-control'], CORE['float-right'] ,CORE['rounded-0'] ,CORE['p-4']].join(" ")}>
            <label className={CORE['form-check-label']} for="flexCheckDefault">Default checkbox</label>
            </div>
                </div>
</div>

            </div>
            <div className={CORE['row']}>
                <div className={[CORE['col-md-1'], CORE['col-1'] ,CORE['float-right']].join(" ")}>
                <input className={[CORE['form-check-input'], CORE['mt-3']].join("")} type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className={[CORE['col-md-11'], CORE['col-12']].join(" ")}>
            <div className={CORE['form-check']}>
            
            <div className={[CORE['form-control'], CORE['float-right'] ,CORE['rounded-0'] ,CORE['p-4']].join(" ")}>
            <label className={CORE['form-check-label']} for="flexCheckDefault">Default checkbox</label>
            </div>
                </div>
</div>

            </div>

            <div className={CORE['row']}>
                <div className={[CORE['col-md-1'], CORE['col-1'] ,CORE['float-right']].join(" ")}>
                <input className={[CORE['form-check-input'], CORE['mt-3']].join("")} type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className={[CORE['col-md-11'], CORE['col-12']].join(" ")}>
            <div className={CORE['form-check']}>
            
            <div className={[CORE['form-control'], CORE['float-right'] ,CORE['rounded-0'] ,CORE['p-4']].join(" ")}>
            <label className={CORE['form-check-label']} for="flexCheckDefault">Default checkbox</label>
            </div>
                </div>
</div>

            </div>
            <div className={CORE['row']}>
                <div className={[CORE['col-md-1'], CORE['col-1'] ,CORE['float-right']].join(" ")}>
                <input className={[CORE['form-check-input'], CORE['mt-3']].join("")} type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className={[CORE['col-md-11'], CORE['col-12']].join(" ")}>
            <div className={CORE['form-check']}>
            
            <div className={[CORE['form-control'], CORE['float-right'] ,CORE['rounded-0'] ,CORE['p-4']].join(" ")}>
            <label className={CORE['form-check-label']} for="flexCheckDefault">Default checkbox</label>
            </div>
                </div>
</div>

            </div>

            {/* Footer buttons */}


            <div className={[CORE['row'], CORE['mt-5']].join(" ")}>
            <div className={CORE['row']}>

               
<div className={CORE['col']}></div>
<div className={CORE['col']}></div>
</div>
            <button className={[CORE['btn'],  CORE['offset-0'] ,CORE['offset-md-1'] ,CORE['mb-3'] ,CORE['mb-md-0']].join(" ") + '  btnOrange  ' + STYLES.customBtnLevel}><i className={CORE['fa fa-exchange']}><span className={CORE['ml-2']}>Update Configuration</span></i></button>
           <div className={CORE['row']}>

               
               <div className={CORE['col']}></div>
               <div className={CORE['col']}></div>
           </div>
            <button  className={'btnBorder '+[CORE['btn'], STYLES.customBtnLevel].join(" ")}><i className={CORE['fa fa-close']}></i><span className={CORE['ml-2']}>Cancel</span></button>
            </div>
            
        </div>
    )
}