import React from 'react'
import "./Header.css"


export default function Header({setField}) {
    return (
        <div className="headerdiv">
            <div className="logodiv"></div>
            <div>
                <ul className="categorydiv" style={{listStyle:"none"}}>
                    <li onClick={()=>{setField("cricket")}}>CRICKET</li>
                    <li onClick={()=>{setField("basketball")}}>BASKET BALL</li>
                    <li onClick={()=>{setField("soccer")}}>SOCCER</li>
                    <li onClick={()=>{setField("tennis")}}>TENNIS</li>
                </ul>
            </div>
        </div>
    )
}
