import React, { Fragment, useState } from "react";

// component
// its a javascript function that returns single html element
// its a reusable piece of code that have own state and logic
// first letter of component name should be capital
// syntax: <Component_name/> ,it can be small as a button

// normal function
export function One_button() {
  return <button>click</button>;
}

// how to return multiple elements
export function Two_buttons() {
  // syntax: <></>,<div></div>,<fragment></fragment>
  return (
    <div>
      <button>click</button>
      <button>click</button>
    </div>
  );
}

// function are king
export function Jsx_function() {
  function ButtonUI() {
    return <></>;
  }
  console.log("hi");
  return (
    <>
      {ButtonUI()}
      <ButtonUI />
      <One_button />
    </>
  );
}

// conditional rendering
export function Fn_Return() {
  //
  switch (true) {
    case true:
      return <div>dev</div>;
    default:
      return <div>prod</div>;
  }

  //
  if (true) {
    return <div>true</div>;
  } else {
    return <div>false</div>;
  }

  //
  {
    return true ? <div>true</div> : <div>false</div>;
  }
}

// Jsx condition
export function Jsx_condition() {
  return (
    <>
      {<div></div> ? "hi" : "bye"}
      {true && <div>python</div>}

      {<div>java</div> || true}
      {false || <div>C++</div>}

      {undefined ?? <div>ruby</div>}
      {null ?? <div>swift</div>}

      {true ? <div>C#</div> : <div>php</div>}
      {typeof "45" === "string" ? <div>html</div> : <div>css</div>}

      {/* not visible data */}
      {true}
      {false}
      {undefined}
      {null}
      {[]}
      {""}
      {<></>}
    </>
  );
}

// Jsx_css
export function Jsx_css() {
  const styleObj = {
    color: "blue",
    fontSize: "4.5rem",
    margin: "0px",
  };

  return (
    <>
      {/* css obj */}
      <p style={{}}>apple</p>

      {/* object */}
      <p style={styleObj}>hello</p>

      {/* template literal */}
      <p style={{ color: `${styleObj?.color}` }}>internet</p>

      {/* condition */}
      <p style={{ color: true ? "red" : "blue" }}>orange</p>

      {/* array */}
      {["red", "blue", "green", "yellow"].map((item, index) => {
        return <hr key={index} style={{ color: `${item}` }} />;
      })}
    </>
  );
}

// Jsx data
export function Jsx_data() {
  const person = {
    name: "dev",
    age: 22,
  };

  const products = [
    { name: "android", id: 1, color: "red" },
    { name: "mango", id: 2, color: "green" },
    { name: "Apple", id: 3, color: "blue" },
  ];

  function fn_data() {
    return "react";
  }

  return (
    <>
      {/* comment */}
      {5355}
      {"_string"}
      <br />

      {person?.name}
      {typeof person?.name}
      {console.log("hello")}
      <br />

      {fn_data()}
      {fn_data().toUpperCase().toLocaleLowerCase()}

      {<h1>hello</h1>}
      <p>product : {products[0]?.name} </p>

      {/* array loop */}
      {products &&
        Array.isArray(products) &&
        products?.length > 0 &&
        products?.map((item, index) => {
          return (
            <p
              key={index}
              style={{ color: item?.color, margin: "0px" }}
              className="fw-bold"
            >
              {item?.name}
            </p>
          );
        })}

      {/* object loop */}
      {person &&
        Object.keys(person)?.length > 0 &&
        Object.entries(person)?.map(([key, value], i) => {
          return (
            <p key={i} style={{ margin: "0px" }}>
              {key} : {value}
            </p>
          );
        })}
    </>
  );
}

// event handling
export function Event_handling() {
  // onClick , onMouseOver , onSubmit , onChange ...etc
  // e = SyntheticBaseEvent => object
  // e.target.value = input value

  function handleClick(e) {
    console.log("data : ", e);
  }

  return (
    <div className="d-flex flex-column gap-3 w-25">
      <button
        onClick={(e) => console.log("hello")}
        className="btn btn-primary cursor-pointer"
      >
        click
      </button>

      {/* every key press creates event with previous value */}
      <input
        placeholder="enter text"
        className="form-control"
        type="text"
        onChange={(e) => console.log(e.target.value)}
      />

      {/* onClick execute this function */}
      <button onClick={handleClick}>click 1</button>

      {/* auto execute */}
      <button onClick={handleClick()}>click 2</button>

      {/* use callback function when passing parameter */}
      <button onClick={() => handleClick(5)}>click 2</button>
    </div>
  );
}

// prop passing => parent to child
export function ParentUI() {
  // child
  function ChildUi(prop) {
    return (
      <>
        <p className={`text-${prop.color} fs-4`}> {prop.fruit}</p>
      </>
    );
  }
  return (
    <>
      <p>Food properties : </p>
      <ChildUi fruit="apple" color="primary" />
    </>
  );
}

// prop passing => child to parent
export function ParentUI2() {
  const [data, setData] = useState("");
  // child
  function ChildUi2(prop) {
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

  return (
    <>
      <p>name : {data}</p>
      <ChildUi2 setData={setData} />
    </>
  );
}

// prop drilling => nested data passing
export function PropDrilling() {
  // child 1
  function ButtonUi(prop) {
    return (
      <div className="border border-3 p-3">
        <p>child</p>
        <ButtonText data={prop.data} />
      </div>
    );
  }

  // child 2
  function ButtonText(prop) {
    return (
      <div className="border border-3 p-3">
        <p>grandchild</p>
        <button className="btn btn-primary">{prop.data}</button>
      </div>
    );
  }

  return (
    <div className="border border-3 p-3">
      <p>parent</p>
      <ButtonUi data="click" />
    </div>
  );
}

// prop object
export function Jsx_Prop() {
  const obj = {
    data: "hey",
    key: "2",
  };

  function Prop_1(prop) {
    // function ( { data, key } ) // u can destructure here
    const { data, key } = prop; // u can destructure here

    return (
      <p>
        {prop.data} {prop.key}
      </p>
    );
  }
  return (
    <>
      <Prop_1 data="hello" key="1" />
      <Prop_1 {...obj} />
    </>
  );
}

// children prop
export function Booster() {
  function Wrapper({ children }) {
    return (
      <div className="border border-3 p-3 bg-primary">
        <br />
        {children}
      </div>
    );
  }

  return (
    <>
      <Wrapper>hello</Wrapper>
    </>
  );
}

// map and key
export function Favorite() {
  const JsonData = [
    { name: "android", price: 1764 },
    { name: "mango", price: 2653 },
    { name: "Apple", price: 3342 },
  ];

  function CardData(props) {
    const { name, price } = props;
    return (
      <p>
        {name} : ${price}
      </p>
    );
  }

  return (
    <Fragment>
      {JsonData && Array.isArray(JsonData) && JsonData?.length > 0 ? (
        JsonData?.map((item, index) => (
          <CardData name={item.name} price={item.price} key={index} />
        ))
      ) : (
        <>No data found</>
      )}
    </Fragment>
  );
}
