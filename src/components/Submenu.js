import "./Submenu.css"
import React from "react";
import { useNavigate } from "react-router-dom";
function Submenu(props){
    let navigate = useNavigate();
    return(
        <>
            <div className="toolTipTopCampaignSidebar" >
                <div className="tooltip-section">
                    <div className="tooltip-group">
                        {
                            props.data.map((item,index)=>{
                                return(
                                    <>
                                    <div  onClick={()=>navigate(item.route)} className="tooltip-data">
                                    <p>{item.name}</p>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Submenu;