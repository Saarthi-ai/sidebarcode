import React from 'react';
import Sidebar from "./Sidebar";
import {useLocation} from "react-router-dom"
function Layout(props) {
    const location=useLocation();
    return (
        <>
            <h1 style={{textAlign:'center',margin:0,marginBottom:'17px'}}>This will be the Header </h1>
            <div style={{display: "flex"}}>
                <div>
                <Sidebar history={location}/>
                </div>
                <div style={{marginLeft:'90px',width:'100%'}}>
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Layout;