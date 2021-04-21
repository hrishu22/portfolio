import React from 'react'
import './About.css'
import pic from './about.jpg'
const About=()=> {
    return (
        <div className="about">
             <h1 className="about_h1">About</h1>
            <div className="pic_div">
                <img className="about_pic"
                    src={pic} width="300px" 
                    height="300px"/>
       
           </div>
            <div className="pic_div">
                <div className="about_div">
                    Coming soon......<br/>
                    site is under maintainance
                </div>
            </div>
        </div>
    )
}

export default About
