import React from "react";

function HomePage() {
  return (
    <div>
      {/* navbar */}
      <div className="w-100 bg-light d-flex justify-content-between">
        <div className="d-flex gap-3">
          {["Home", "About", "Contact"].map((data, index) => {
            return (
              <div className="p-3 fw-normal fs-5" style={{ cursor: "pointer" }}>
                {data}
              </div>
            );
          })}
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-danger">logout</button>
        </div>
      </div>

      {/* main */}
      <div className="p-2">
        <p>welcome to home</p>
      </div>
    </div>
  );
}

export default HomePage;
