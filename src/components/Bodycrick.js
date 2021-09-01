import React from 'react'
import "./Body.css"
import { fetchDatacrick } from './Apicric'
import { useState } from "react"
var data = fetchDatacrick()


export default function Bodycrick() {
    console.log(data.user.read().arts)
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