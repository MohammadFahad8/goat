import React  from "react";
import STYLES from '../custom.module.scss'
import clapdesktp from '../utils/icons/clap_desktop.png'
import CORE from '../index.module.scss'
export const Updatemodal = () =>{

    return(<div>


        
<div class="modal fade" id="response" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      {/* <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>*/}
      <div class="modal-body">
      <div className={[CORE['row'],CORE['justify-content-center']].join(" ")}>
      
          
            <img src={clapdesktp} className={[STYLES['clap_desk']].join(" ")}/>
            <span className={[STYLES['clap_desk_heading']].join(" ")}>Great Job!</span>
            <span className={[STYLES['clap_desk_para']].join(" ")}>Your configurations have been updated successfully</span>
        </div>
      </div>
     
    </div>
  </div>
</div>
    </div>)
}