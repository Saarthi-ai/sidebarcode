import React, {useEffect, useState} from "react";
// import {useLocation} from "react-router-dom";
import SidebarData from "../SidebarData";
import BarIcon from "./BarIcon";
import "./Sidebar.css";
import Submenu from"./Submenu";


function Sidebar(props, {defaultActive,}) {
    const location = props.history;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);
    const [show,setshow]=useState(false);
    const submenuRoutes =[];
    // eslint-disable-next-line
    SidebarData.map((item,index)=>{
        if(item.submenu===true) submenuRoutes.push(item.route);
    })
    function changeParentIndex(newIdx){
        localStorage.setItem("ParentIdx",newIdx)
        setActiveIndex(newIdx)
    }
    console.log(localStorage);
    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarData.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
        if(getPath(location.pathname)==="/")changeActiveIndex(-1);
        else if(activeItem!==-1 ) changeParentIndex(activeItem)
        
    }, [location])
    console.log(activeIndex)

    useEffect(()=>{
        if(submenuRoutes.indexOf(getPath(location.pathname)) >=0) setshow(true);
        else setshow(false);
        // eslint-disable-next-line
    }, [location],submenuRoutes)
    return (
        <>
            <div className="Sidebar">
                <div className="SidebarPart">
                    {
                        SidebarData.map((item, index)=> {
                           if(item.position==="top"){ 
                                    if(item.submenu===true && getPath(item.route) === getPath(location.pathname))
                                    return (<>
                                    <div className="IconWithMenu">
                                    <BarIcon active={index===activeIndex} key={index} inactivesrc={item.inactivesrc} activesrc={item.activesrc} 
                                    inactivealt={item.inactivealt} activealt={item.activealt}
                                    label={item.label} route={item.route}>
                                    </BarIcon>
                                    {show?<Submenu data={item.submenuData}></Submenu>:null}
                                    </div>
                                    </>)
                                    else return (
                                    <BarIcon active={index===activeIndex} key={index} inactivesrc={item.inactivesrc} activesrc={item.activesrc} 
                                    inactivealt={item.inactivealt} activealt={item.activealt}
                                    label={item.label} route={item.route}>
                                    </BarIcon>)
                                    
                            }
                            else return null;
                        })
                    }
                </div>
                <div className="SidebarPart">
                    {
                        SidebarData.map((item, index)=> {
                           if(item.position==="bottom"){ 
                                    if(getPath(item.route) === getPath(location.pathname))
                                    return (<>
                                    <div className="IconWithMenu">
                                    <BarIcon active={index===activeIndex} key={index} inactivesrc={item.inactivesrc} activesrc={item.activesrc} 
                                    inactivealt={item.inactivealt} activealt={item.activealt}
                                    label={item.label} route={item.route}>
                                    </BarIcon>
                                    {show?<Submenu data={item.submenuData}></Submenu>:null}
                                    </div>
                                    </>)
                                    else return (
                                    <BarIcon active={index===activeIndex} key={index} inactivesrc={item.inactivesrc} activesrc={item.activesrc} 
                                    inactivealt={item.inactivealt} activealt={item.activealt}
                                    label={item.label} route={item.route}>
                                    </BarIcon>)
                                    
                            }
                            else return null;
                        })
                    }
                </div>
                <div className="behind-the-scenes"/>
            </div>
        </>
    );
}

export default Sidebar;

// const SidebarParent = styled.div`
//   background: #cf3d2a;
  
//   a {
//     text-decoration: none;
//   }
  
//   & > div {
//     width: 250px;
//     height: 100vh;
//   }
  
//   .behind-the-scenes {
//     width: 250px;
    
//   }
// `;

// const SidebarItem = styled.div`
//   padding: 16px 24px;
//   transition: all 0.25s ease-in-out;
//   background: ${props => props.active ? "#b15b00" : ""};
//   margin: 4px 12px;
//   border-radius: 4px;
//   p {
//     color: white;
//     font-weight: bold;
//     text-decoration: none;
//   }
  
//   &:hover {
//     cursor:pointer;
//   }
  
//   &:hover:not(:first-child) {
//     background: #c34a36;
//   }
// `;