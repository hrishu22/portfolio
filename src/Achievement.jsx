import React from 'react';
import todo from './todo.png'
import './Achievement.css'
import calc from './calc.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Card=()=>{
    return(

        <div className="card">
           
                <div className="inner_div">
                <h1 className="more">Projects</h1>
                    <div className="cards">
                        
                        <img src={todo}
                        alt="myPic"
                            width="100%"
                            height="150px" 
                            className="img"/>
                        <div className="info">
                            <h1 className="info_tittle">
                                ToDo List
                            </h1>
                            <p className="card_descrip">A nice cleaned UI to note your daily tasks.<br/>
                            Click on the ARROW  to give it a try...</p>
                            <a  className="link"href="https://hrishu22.github.io/todo" target="_blank">
                        <ArrowForwardIcon  className="buttt"/></a> 

                        </div>
                    </div>
                     <div className="cards">
                        <img src={calc}
                        alt="myPic"
                            width="100%"
                            height="150px" 
                            className="img"/>
                        <div className="info">
                            <h1 className="info_tittle">
                                Web Calculator
                            </h1>
                            <p className="card_descrip">Simple web based calculator  using ReactJS<br/>
                            Click on the ARROW  to  give it a try...</p>
                            <a className="link"href="https://hrishu22.github.io/todo" target="_blank">
                   <ArrowForwardIcon  className="buttt"/> 
               </a>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={todo}
                        alt="myPic"
                            width="100%"
                            height="150px" 
                            className="img"/>
                        <div className="info">
                            <h1 className="info_tittle">
                                ToDo List
                            </h1>
                            <p className="card_descrip">A nice cleaned UI to note your daily tasks.<br/>
                            Click on the ARROW  to  give it a try...</p>
                            <a className="link"href="https://hrishu22.github.io/todo" target="_blank">
                   <ArrowForwardIcon  className="buttt"/> 
               </a>
                        </div>
                    </div>

                    <div className="cards">
                        <img src={todo}
                        alt="myPic"
                            width="100%"
                            height="150px" 
                            className="img"/>
                        <div className="info">
                            <h1 className="info_tittle">
                                ToDo List
                            </h1>
                            <p className="card_descrip">A nice cleaned UI to note your daily tasks.<br/>
                            Click on the ARROW  to  give it a try...</p>
                            <a className="link"href="https://hrishu22.github.io/todo" target="_blank">
                   <ArrowForwardIcon  className="buttt"/> 
               </a>
                        </div>
                    </div> 
                </div>
                
        </div>




    )
  }
  export default Card;