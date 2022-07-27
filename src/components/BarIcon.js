import "./BarIcon.css";
import React from "react";
import {Link} from "react-router-dom";
function BarIcon(props){
    return(
        <>
        <div className="BarIcon">
            <Link to={props.route} >
            {props.active?
            <img alt={props.activealt} src={props.activesrc} ></img>
            :
            <img alt={props.inactivealt} src={props.inactivesrc}></img>
            }
            </Link>
            <h6>{props.label}</h6>
        </div>  
        {/* <div>
        {props.subneeded} && <Submenu props={props.submenu}/>  
        </div> */}
        </>
    );
}
export default BarIcon;