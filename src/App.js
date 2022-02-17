import { useState } from "react";
import "./App.css";
import img from "./images/fluff.jpg";
import img1 from "./images/serum.jpg";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="img-container" id="top-container">
          <div className="foreground a">
            <div className="text-content">
              <p className="text-top">1996</p>
              <p className="text-bottom">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="foreground b">
            <div className="text-content">
              <p className="text-top">2003</p>
              <p className="text-bottom">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </p>
            </div>
          </div>
          <div className="foreground c">
            <div className="text-content">
              <p className="text-top">2007</p>
              <p className="text-bottom">
                Lorem Ipsum is simply dummy text of the printialley of type and
                scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div className="foreground d">
            <div className="text-content">
              <p className="text-top">2008</p>
              <p className="text-bottom">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </p>
            </div>
          </div>
          <div className="foreground e">
            <div className="text-content">
              <p className="text-top">2013</p>
              <p className="text-bottom">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="foreground f">
            <div className="text-content">
              <p className="text-top">2017</p>
              <p className="text-bottom">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>
        <div className="img-container">
          <div className="img-wrapper">
            <img src={img} id="img" alt="img" className="product"></img>
          </div>
          <div className="img-wrapper">
            <img src={img1} id="img1" alt="img" className="product"></img>
          </div>
          <div className="img-wrapper">
            <img src={img} id="img2" alt="img" className="product"></img>
          </div>
          <div className="img-wrapper">
            <img src={img1} id="img3" alt="img" className="product"></img>
          </div>
          <div className="img-wrapper">
            <img src={img} id="img4" alt="img" className="product"></img>
          </div>
          <div className="img-wrapper">
            <img src={img1} id="img5" alt="img" className="product"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
