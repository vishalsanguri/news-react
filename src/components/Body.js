import React from 'react'
import "./Body.css"
import { fetchData } from './Api'
import { useState } from "react"
var data = fetchData()


export default function Bodybasket(){
    const [info] = useState(data.user.read().arts)
    return (
        <div className="bodydiv">
            {info.map((e, i) => {
                return <div key={i} className="infodiv">
                    <div className="headingdiv">
                        {e.des}
                    </div>
                    <div className="contentdiv">
                        <div className="imagediv">
                            <img className="photo" src={e.img} alt="img-unavailable" />
                        </div>
                        <div className="textdiv">
                            {e.con}
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}