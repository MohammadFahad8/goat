import React from 'react';
import imgone from '../utils/images/cardimg1.jpg'
import imgtwo from '../utils/images/cardimg2.png'
import CORE from '../index.module.scss'
export const Cardcontent = (props)=>
{
    console.log(props)
    return(
        <div className={[CORE['col-lg-4'], CORE['mb-3']].join(" ")}>
        <div className={[CORE['card'] ,CORE['rounded']].join(" ")}>
        <img src={imgone} style={{maxWidth:'100%'}} className={[CORE['d-lg-block'], CORE['d-xl-block'], CORE['d-none'], CORE['d-md-none'] ,CORE['rounded']].join(" ")}/>

            <div className={CORE['card-body']}>
               
                <div className={CORE['row']}>
                    <div className={[ CORE['col-3'] ,CORE['col-md-3'] ,CORE['d-lg-none'] ,CORE['d-xl-none'],  CORE['d-xs-none'], CORE['d-sm-none'] ,CORE['d-md-block'], CORE['d-none']].join(" ")}>
                    <img src={imgtwo} style={{maxWidth:'100%',height:'100px'}} className={[CORE['d-lg-none'], CORE['d-xl-none']].join(" ")}/>
                    </div>
                    <div className={[CORE['col-md-8'], CORE['mb-0'] ,CORE['mb-lg-5'], CORE['mb-xl-5'], CORE['col-10'], CORE['mb-md-0'] ,CORE['textLeft']].join(" ")}>
                    <h4 className="cardHeadin" style={{ fontWeight:'900',color:'black',fontSize:'smaller' }}>Design indeba conference</h4>
                    <span className={[CORE['d-lg-none'], CORE['d-xl-none'], CORE['d-block']].join(" ")}>
                    <p style={{color:'black',fontSize:'10px',fontWeight:'400'}}>21 sep,2014</p>
                    <p style={{color:'black',fontSize:'10px',fontWeight:'400'}}>Ticket Available : <span className={CORE['text-warning']}>206</span> </p>
                    </span>
                    </div>
                    <div className={[CORE['col-lg-5'], CORE['col-md-8'], CORE['col-6'], CORE['d-xl-block'], CORE['d-lg-block'], CORE['d-md-none'], CORE['d-sm-none'], CORE['d-xs-none'], CORE['d-none']].join(" ")}><p style={{color:'black',fontSize:'14px',fontWeight:'400'}}>21 sep,2014</p> </div>
                    <div className={[CORE['col-lg-7'], CORE['col-md-8'], CORE['col-6'], CORE['d-xl-block'], CORE['d-lg-block'], CORE['d-md-none'], CORE['d-sm-none'], CORE['d-xs-none'], CORE['d-none']].join(" ")}><p style={{color:'black',fontSize:'14px',fontWeight:'400'}}>Ticket Available : <span className={CORE['text-warning']}>206</span> </p></div>
                    { (props.prosome%2==0)?   <i data-toggle="modal" data-target="#myModal"  className={[CORE['fa fa-calendar'], CORE['d-lg-none'], CORE['d-xl-none'], CORE['mt-md-5']].join(" ")} aria-hidden="true"></i> 
                                            :<i  data-toggle="modal" data-target="#myModal" className={[ CORE['d-lg-none'], CORE['d-xl-none'], CORE['fa fa-calendar-check-o'], CORE['text-warning'], CORE['mt-md-5']].join(" ")} aria-hidden="true"></i>
    }
                </div>
                
                {/* You can set your own logic to display sold out button I did the following for previewing both button styles */}
            { (props.prosome%2==0)?   <button data-toggle="modal" data-target="#myModal"  className={'btnBorderGrey ' + [ CORE['d-lg-block'], CORE['d-xl-block'], CORE['d-none'], CORE['d-md-none'], CORE['d-sm-none'] ,CORE['d-xs-none'], CORE['btn'], CORE['btn-block'], CORE['bg-white']].join(" ")} style={{ fontWeight:'600' }}><i className="fa fa-calendar" aria-hidden="true"></i> SOLD OUT</button>
                                            :<button  data-toggle="modal" data-target="#myModal" className={'btnBorder '+ [ CORE['d-lg-block'], CORE['d-xl-block'], CORE['d-md-none'], CORE['d-sm-none'], CORE['d-none'], CORE['d-xs-none'], CORE['btn'], CORE['btn-block'],  CORE['bg-white']].join(" ") } style={{ fontWeight:'600' }}><i className="fa fa-calendar-check-o" aria-hidden="true"></i> Book Event</button>
    }
    {/* mobile */}
      
            </div>
            
        </div>
        </div>
    )
}