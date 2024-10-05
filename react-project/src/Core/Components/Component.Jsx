import React, { Fragment, useState } from "react";

// component
// its a javascript function that returns single html element
// its a reusable piece of code that have own state and logic
// first letter of component name should be capital
// syntax: <Component_name/> ,it can be small as a button

// smallest component
export function One_button() {
  return <button>click</button>;
}

// how to return multiple elements
// syntax: <></>,<div></div>,<fragment></fragment>
export function Two_buttons() {
  return (
    <div>
      <button>click</button>
      <button>click</button>
    </div>
  );
}

// how to include component
export function Jsx_function() {
  //
  function ButtonUI() {
    return <></>;
  }

  return (
    <>
      {ButtonUI()}
      <ButtonUI />
      <One_button />
    </>
  );
}

// Prop ( one way binding )
// data passing => parent to child
export function Food() {
  return (
    <>
      <p>Food properties : </p>
      <FoodDetails fruit="apple" color="primary" />
    </>
  );
}
function FoodDetails(prop) {
  return (
    <>
      <p className={`text-${prop.color} fs-4`}> {prop.fruit}</p>
    </>
  );
}

// state up
// data passing => child to parent
export function ParentUI() {
  const [data, setData] = useState("");

  return (
    <>
      <p>name : {data}</p>
      <ChildUi setData={setData} />
    </>
  );
}
function ChildUi(prop) {
  return (
    <>
      <button
        className="btn btn-primary px-4"
        onClick={() => prop.setData("dev")}
      >
        dev
      </button>
    </>
  );
}

// prop drilling => nested data passing
export function CardDesign() {
  return (
    <div className="border border-3 p-3">
      <p>parent</p>
      <ActualButton data="click" />
    </div>
  );
}
function ActualButton(prop) {
  return (
    <div className="border border-3 p-3">
      <p>child</p>
      <ButtonText data={prop.data} />
    </div>
  );
}
function ButtonText(prop) {
  return (
    <div className="border border-3 p-3">
      <p>grandchild</p>
      <button className="btn btn-primary">{prop.data}</button>
    </div>
  );
}

// prop is a object
export function Jsx_Prop() {
  const objData = {
    data: "hello",
    key: "1",
  };

  return (
    <>
      {/* data passing like a object key value */}
      <Prop_1 data="hello" key="1" />
      {/* passing object data using spread operator */}
      <Prop_1 {...objData} />
    </>
  );
}

function Prop_1(prop) {
  // destructue
  // function ( { data, key } ) // 1
  // const { data, key } = prop; // 2

  return (
    <p>
      {prop.data} {prop.key}
    </p>
  );
}

// {children} is a special prop
// pass components into their child components
function WrapperComponent({ children }) {
  return (
    <div className="border border-3 p-3 bg-primary">
      <p>:</p>
      {children}
    </div>
  );
}
export function Myapp() {
  return (
    <WrapperComponent>
      <h1>Hello, World!</h1>
      <p>This is some content</p>
    </WrapperComponent>
  );
}
