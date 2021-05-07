import React from 'react'
import './Header.css'
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import Avatar from '@material-ui/core/Avatar';
import  logo from './ME.jpeg'
const Header=()=> {
    
    return (<>
         <div className="main_header">
  
               <nav> 
               <Avatar  className="avatar" alt="ANand" src={logo} />
               {/* <input className="check" type="checkbox"></input> */}
         <label  for="check"className="bars">
         <HorizontalSplitIcon   classname="bars" />
         
              </label>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Feedback</a></li>

            </ul>
            
        </nav>
        
        </div>
            </>    
    )
}

export default Header

