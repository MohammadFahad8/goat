import React from "react";
import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import clapdesktp from '../utils/icons/clap_desktop.png'
import CORE from '../index.module.scss'
import {Updatemodal} from './Updatemodal.component'

import $ from 'jquery';
export const Details =() =>{

    
    const showPara=()=>
    {
        
       
        
        var btnLink = CORE['btn-link']
        
        $('#btnOne').on('click',()=>{

             $('#collapseOne').toggleClass(CORE['show'])
             $('#headingOne').toggleClass(CORE['bg-white'])
            
        })
        $('#btnTwo').on('click',()=>{

            $('#collapseTwo').toggleClass(CORE['show'])
            $('#headingTwo').toggleClass(CORE['bg-white'])
        })
        $('#btnThree').on('click',()=>{

            $('#collapseThree').toggleClass(CORE['show'])
            $('#headingThree').toggleClass(CORE['bg-white'])
        })
    }
    React.useEffect(()=>{
showPara()

    })

    return(

        <div className={CORE['p-5']}>
            <Updatemodal/>
        {/* <div className={[STYLES['popupConfirm']].join(" ")}>
            <img src={clapdesktp} className={[STYLES['clap_desk']].join(" ")}/>
            <span className={[STYLES['clap_desk_heading']].join(" ")}>Great Job!</span>
            <span className={[STYLES['clap_desk_para']].join(" ")}>Your configurations have been updated successfully</span>
        </div> */}
            <div className={[CORE['textLeft'], CORE['text-dark']].join(" ")}>
            <h1 className={'selectconfig '+[CORE['mt-5'],CORE['mb-5']].join(" ")}>Select Configuration</h1>
            </div>
            <div id="accordion" className={[CORE['mt-5'],CORE['textCenter']].join(" ")}>
                <div className={CORE['row']}>
                    <div className={[,CORE['col-2'],CORE['col-md-2']].join(" ")}>
                {/* <input type="radio" name="config_select" /> */}
                
    {/* <input type="checkbox" id="ritema" name="ritem" value="ropt1" className={[CORE['mt-3'],CORE['float-right']].join(" ")}/> */}
    <label className={STYLES['chkcontainer']}>
  <input type="checkbox"  className={[CORE['mt-3'],CORE['float-right']].join(" ")} />
  <span className={STYLES['checkmark']}></span>
</label>
    

                
                </div>
                <div className={[CORE['col-md-10'],CORE['col-10']].join(" ")}>
  <div className={[CORE['rounded-0'],CORE['card']].join(" ")}>
    <div className={[CORE['card-header'],CORE['bg-white']].join(" ")} id="headingOne">
      <h5 className={[CORE['mb-0'],CORE['textLeft']].join(" ")}>
        <button id="btnOne" className={[CORE['btn'], CORE['btn-link'],CORE['textLeft'] ,STYLES['btnText']].join(" ")} data-toggle={CORE['collapse']} data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Manual Configuration <br/><span className={[STYLES['btnp']].join(" ")}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
        </button>
      </h5>
    </div>

    <div id="collapseOne" className={[CORE['collapse']].join(" ")} aria-labelledby="headingOne" data-parent="#accordion">
      <div className={[CORE['card-body'],STYLES['bgGrey']].join(" ")}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  </div>
  </div>
  <div className={CORE['row']}>
                    <div className={[,CORE['col-2'],CORE['col-md-2']].join(" ")}>
                    <label className={STYLES['chkcontainer']}>
  <input type="checkbox"  className={[CORE['mt-3'],CORE['float-right']].join(" ")} />
  <span className={STYLES['checkmark']}></span>
</label>
                
                </div>
                <div className={[,CORE['col-10'],CORE['col-md-10']].join(" ")}>
  <div className={[CORE['rounded-0'],CORE['card']].join(" ")}>
    <div className={[CORE['card-header'],CORE['bg-white']].join(" ")} id="headingTwo">
      <h5 className={[CORE['mb-0'],CORE['textLeft']].join(" ")}>
        <button id="btnTwo" className={[CORE['btn'], CORE['btn-link'],CORE['textLeft'],STYLES['btnText']].join(" ")} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Semi-auto Configuration <br/><span className={STYLES['btnp']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className={CORE['collapse']} aria-labelledby="headingTwo" data-parent="#accordion">
      <div className={[CORE['card-body'],STYLES['bgGrey']].join(" ")}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div></div>
  </div>
  <div className={CORE['row']}>
                    <div className={[,CORE['col-2'],CORE['col-md-2']].join(" ")}>
                    <label className={STYLES['chkcontainer']}>
  <input type="checkbox"  className={[CORE['mt-3'],CORE['float-right']].join(" ")} />
  <span className={STYLES['checkmark']}></span>
</label>
                
                </div>
                <div className={[,CORE['col-10'],CORE['col-md-10']].join(" ")}>
  <div className={[CORE['rounded-0'],CORE['card']].join(" ")}>
    <div className={[CORE['card-header'],CORE['bg-white']].join(" ")} id="headingThree">
      <h5 className={[CORE['mb-0'],CORE['textLeft']].join(" ")}>
        <button id="btnThree" className={[CORE['btn'], CORE['btn-link'],CORE['textLeft'],STYLES['btnText']].join(" ")} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Automatic Configuration <br/> <span className={STYLES['btnp']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className={CORE['collapse']} aria-labelledby="headingThree" data-parent="#accordion">
      <div className={[CORE['card-body'],STYLES['bgGrey']].join(" ")}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  </div>
  </div>
</div>


            <div className={[CORE['row'], CORE['mt-5']].join(" ")}>
            <div className={CORE['row']}>

               
<div className={CORE['col']}></div>
<div className={CORE['col']}></div>
</div>

            <button data-toggle="modal" data-target="#response" className={[CORE['btn'],  CORE['offset-0'] ,CORE['offset-md-2'] ,CORE['mb-3'] ,CORE['mb-md-0']].join(" ") + '  btnOrange  ' + STYLES.customBtnLevel}><i className={'fa fa-exchange'}><span className={[STYLES['ff'],CORE['ml-2']].join(" ")}>Update Configuration</span></i></button>

           <div className={CORE['row']}>

               
               <div className={CORE['col']}></div>
               <div className={CORE['col']}></div>
           </div>

            <button    className={'btnBorder '+[CORE['btn'],CORE['bg-white'], STYLES.customBtnLevel].join(" ")}><i className={'fa fa-close'}></i><span className={[CORE['ml-2'],CORE['bg-white']].join(" ")}>Cancel</span></button>
            </div>
            {/* popup    */}
            
      {/* Update response modal       */}


        </div>
    )
}