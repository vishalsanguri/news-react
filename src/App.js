import "./App.css";
import React, { Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Bodybasket = React.lazy(() => import("./components/Body"));
const Bodycrick = React.lazy(() => import("./components/Bodycrick"));
const Bodysoccer = React.lazy(() => import("./components/Bodysoccer"));
const Bodytennis = React.lazy(() => import("./components/Bodytennis"));

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Render />}>
        <Routes>
          <Route path="/basket" element={<Bodybasket />} />
          <Route path="/soccer" element={<Bodysoccer />} />
          <Route path="/tennis" element={<Bodytennis />} />
          <Route path="/" element={<Bodycrick />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
function Render() {
  const myarray = [1, 2, 3, 4];
  return (
    <>
      <div className="bodydiv1">
        {myarray.map((e, i) => {
          return (
            <div key={i} className="infodiv1">
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
          );
        })}
      </div>
    </>
  );
}
