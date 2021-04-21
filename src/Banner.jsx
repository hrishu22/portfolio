import React from 'react'
import './Banner.css'
import pic from './ME.jpeg'
import fb from './fb.png'
import insta from './insta.png'
import link from './link.png'
import github from './github.png'

const Banner=()=> {
    return (
        <div className="banner">
            <div className="content">
            <h1 className="h">I, <br/>Hrishikesh Anand </h1>
            <p className="banner_p">Frontened Developer|Coder|Beginner HAcker<br/>
           <div className="png_div">
            <a target="_blank" href="https:wwww.facebook.com/hrishikesh.anand.50"><img className="png"  src={fb} width="20px" height="20px" /></a>
            <a target="_blank" href="https://www.instagram.com/i_hrishi_here/"><img className="png" src={insta} width="20px" height="20px" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/hrishikesh-anand-07607317b/"><img className="png" src={link} width="20px" height="20px" /></a>
            <a target="_blank" href="https://www.github.com/hrishu22"><img className="png" src={github} width="20px" height="20px" /></a>
            </div>
            </p>
            <img className="pic" src={pic} width="300px" height="300px"/>
          
            
            
            </div>
  
        
        </div>
    )
}

export default Banner
