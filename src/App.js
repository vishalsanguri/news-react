import React, { Suspense, useState } from 'react'
import Header from "./components/Header"
import Bodybasket from "./components/Body"
import Bodycrick from './components/Bodycrick'
import Bodysoccer from './components/Bodysoccer'
import Bodytennis from './components/Bodytennis'
import "./App.css"

export default function App() {
  const [field, setField] = useState("cricket")
  if(field==="cricket"){
    return(
      <>
      <Header setField={setField} />
      <Suspense fallback={<Render />}>
        <Bodycrick />
      </Suspense>
    </>
    )
  }
  else if(field==="tennis"){
    return(
      <>
      <Header setField={setField} />
      <Suspense fallback={<Render />}>
        <Bodytennis />
      </Suspense>

    </>
    )
  }
  else if(field==="soccer"){
    return(
      <>
      <Header setField={setField} />
      <Suspense fallback={<Render />}>
        <Bodysoccer />
      </Suspense>

    </>
    )
  }
  else if(field==="basketball"){
  return (
    <>
      <Header setField={setField} />
      <Suspense fallback={<Render />}>
        <Bodybasket/>
      </Suspense>

    </>
  )} 
}
function Render(){
  const myarray=[1,2,3,4]
  return (
    <>
    <div className="bodydiv1">
    {myarray.map((e,i)=>{
      return <div key={i} className="infodiv1">
      <div className="headingdiv1">
        <div className="skeleton-text1"></div>
        <div className="hoverclass"></div>
      </div>
      <div className="contentdiv1">
        <div className="imagediv1">
          <div className="hoverclass"></div>

        </div>
        <div className="textdiv1">
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="hoverclass1"></div>
        </div>
      </div>
    </div>
    })}
    </div>
    </>
  )
}