import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import classes from './AlgorithmDescriber.module.css'
import {Link} from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'
import "bootstrap/dist/css/bootstrap.min.css";
const algorithmDescriber = (props) => {
  console.log("algodesc-",props)
  return(
    <div className={classes.AlgorithmDescriber}>
    <Sidebar />
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>
      <div className={classes.buttons}>
        {/* <Link to={props.visualizer}><button className={classes.visualizeButton}>Vizualize</button></Link>  */}
        <Dropdown visual1={props.v1} visual2={props.v2}/>
        <Link to={props.topic}><button className={classes.practiceButton}>Practice</button></Link>
      </div>
    </div>
  </div>
  )
 
  }
export default algorithmDescriber
