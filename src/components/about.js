import { useState } from "react";
import React  from "react";

export default function About() {
 

  let [btntext , setbtntext] = useState("Enable Dark Mode");
  let [MyStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black"
  })



  const toogleMode = () => {

    if(MyStyle.color === "black")
    {
        setMyStyle({
            backgroundColor: "black",
            color: "white"
          })

        setbtntext("Enable light Mode");
    }
    else
    {
        setMyStyle({
            backgroundColor: "white",
            color: "black"
          })

        setbtntext("Enable Dark Mode");

    }

    
  };

  return (
    <>
      <div style={MyStyle}> 
        <div className="container my-4">
          <div className="accordion"  id="accordionExample">
            <div className="accordion-item " style={MyStyle}>
              <h2 className="accordion-header" >
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={MyStyle}
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={MyStyle}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={MyStyle}
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={MyStyle}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={MyStyle}
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <button className="btn btn-primary" onClick={toogleMode}>
            {btntext}
          </button>
        </div>
      </div>
    </>
  );
}
