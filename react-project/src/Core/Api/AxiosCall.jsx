import axios from "axios";
import React, { useEffect, useState } from "react";

function AxiosCall() {
  return (
    <>
      <ApiCall />
    </>
  );
}

export default AxiosCall;

function ApiCall() {
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function AsyncFn() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function AxiosGetFn() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function AxiosPostFn(e) {
    e.preventDefault();
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          username: input,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setInput("");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <form onSubmit={AxiosPostFn} className="mb-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control mb-2"
            placeholder="Username"
          />
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </form>

        <div className="d-flex gap-2">
          <button className="btn btn-primary " onClick={AsyncFn}>
            Async Fn
          </button>
          <button className="btn btn-primary" onClick={AxiosGetFn}>
            Axios Promise
          </button>
        </div>
      </div>
    </div>
  );
}
