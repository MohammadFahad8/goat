import React from 'react';
import STYLES from '../custom.module.scss'
import '../app.scss'
import warning from '../utils/icons/warning.png'
import logomini from '../utils/icons/Vector.png'
import UserImage from '../utils/images/Image.png'
import MainLogo from '../utils/images/LOGOIPSUM.png'
import SIDEBAR from '../header.module.scss';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import CORE from '../index.module.scss'
export const Header = ()=>{


  const openPane = () =>
  {var s = SIDEBAR['sidebar']
    var a =SIDEBAR['active']
    
    console.log(a)
    $('#'+s).addClass(a);
    $('.overlay').fadeIn();
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }
  const dismissPane = () =>
  {
    var s = SIDEBAR['sidebar']
    var a =SIDEBAR['active']
    $('#'+s).removeClass(a);
    $('.overlay').fadeOut();
  }

    return(
<div>
    
    <div style={{marginLeft:'0px'}} className= {[CORE['row'], CORE['justify-content-center'], CORE['textCenter'], CORE['w-100']].join(" ")+' '+ STYLES.BGwheat}>
      <div className={CORE['textCenter']}><img src={warning} width="20" height="20"/></div>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt, neque, 

    </div>
    
    <nav id={SIDEBAR['sidebar']} className={[CORE['d-md-none'], CORE['d-xl-none'], CORE['d-lg-none']].join(" ")}>
               

               <div className={SIDEBAR['sidebar-header']}>
                 <div className={CORE['row']} >
                   <div className={CORE['col-4']}>
             <div id="dismiss textCenter">
                   <i className={'fa fa-close'+ ' '+[CORE['mt-2'], CORE['float-left']].join(" ")} onClick={dismissPane}></i>
               </div>
                   </div>
                   <div className={CORE['col-4']}>
                   <h3>Logo</h3>
                   </div>
                   <div className={CORE['col-4']}>
             <div id="dismiss textCenter" >
                   <i className={'fa fa-sign-out'+ '  '+[CORE['mt-2'], CORE['float-right']].join(" ")}></i>
               </div>
                   </div>
                   </div>
               </div>

               <ul className={[CORE['list-unstyled'] , SIDEBAR['components']].join(" ")}>
                   <p className={CORE['textLeft']}>Dashboard</p>
                   <li className={CORE['active']}>
                       {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a> */}
                       <ul className={[CORE['textLeft'], CORE['list-group']].join(" ")}>
                           <li className={[CORE['list-group-item'], CORE['bg-transparent'], CORE['border-0'], CORE['textLeft']].join(" ")}>
                             <input className={[CORE['bg-transparent'], CORE['border-success'] + ' acc ' +CORE['border-left-0'],CORE['border-top-0'],CORE['border-right-0']].join(" ")} placeholder="Account" />
                              </li>
                           <li className={[CORE['list-group-item'], CORE['bg-transparent'] ,CORE['border-0'], CORE['textLeft']].join(" ")}><a href="#">Help</a></li>
                           {/* <li><a href="#">Home 3</a></li> */}
                       </ul>
                   </li>
                   {/* <li>
                       <a href="#">About</a>
                       <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                       <ul className="collapse list-unstyled" id="pageSubmenu">
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

               {/* <ul className="list-unstyled CTAs">
                   <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a></li>
                   <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
               </ul> */}
           </nav>
        <nav className={[CORE['navbar'], CORE['navbar-expand-lg'], CORE['navbar-dark']].join(" ") +'  '+ STYLES.Navcolor}>
            { /*ORIGINAL <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <button className={CORE['navbar-toggler']} type="button"   onClick={openPane}  >
    <span className={[CORE['navbar-toggler-icon'] , CORE['text-white']].join(" ")}></span>
  </button>

  <a className={[CORE['navbar-brand'] , CORE['offset-md-1'], CORE['offset-0']].join(" ")} href="#"><span><img className={SIDEBAR['miniLogo']} src={logomini}/></span><span className={SIDEBAR['mainLogo']}>LOGO<span className={'text-orange'}>IPSUM</span></span></a>
  <div id="dismiss text-right" className={[CORE['d-md-none'], CORE['d-lg-none'],CORE['d-xl-none'], SIDEBAR['logout-btn-mob']].join(" ")} >
                   <i className={'fa fa-sign-out'+'  '+[CORE['mt-2'],CORE['float-right']].join(" ")}></i>
               </div>

  <div className={[CORE['collapse'],  CORE['navbar-collapse'], CORE['justify-content-end'] ,CORE['p-3'] ,CORE['ml-n2']].join(" ")} id="navbarNavDropdown">
    <ul className={[CORE['navbar-nav'], CORE['me-auto']].join(" ")}>
      <li className={[CORE['nav-item'],  CORE['active'], CORE['p-2']].join(" ")}>
        <Link className={CORE['nav-link']} to="/">Home <span className={CORE['sr-only']}>(current)</span></Link>
      </li>
      <li className={[CORE['nav-item'], CORE['p-2']].join(" ")}>
        <Link className={CORE['nav-link']} to="/events">Events</Link>
      </li>   <li className={[CORE['nav-item'], CORE['p-2']].join(" ")}>
        <a className={CORE['nav-link']} href="#">Features</a>
      </li>
      <li className={[CORE['nav-item'],CORE['p-2']].join(" ")}>
        <a className={CORE['nav-link']} href="#">Pricing</a>
      </li>
      <li className={[CORE['nav-item'] ,CORE['p-2']].join(" ")}>
        <a className={CORE['nav-link']} href="#">Logout</a>
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