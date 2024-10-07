import { useRef, useState } from "react";

export function ControlledForm() {
  const [data, setData] = useState("");

  return (
    <div>
      <label className="mb-2 fw-bold">text field</label>
      <input
        type="text"
        placeholder="enter text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="form-control mb-2"
      />
      <button
        className="btn btn-primary w-100"
        onClick={() => console.log(data)}
      >
        submit
      </button>
    </div>
  );
}

export function UncontrolledForm() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", usernameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={usernameRef} placeholder="Username" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export function RawValidation() {
  const [errmsg, setErrMsg] = useState({});
  const [data, setData] = useState({
    username: "",
  });

  const validate = () => {
    const eMsg = {};
    if (!data.username) {
      eMsg.username = "Username is required";
    }

    if (Object.keys(eMsg).length > 0) {
      setErrMsg(eMsg);
      return false;
    }

    setErrMsg({});
    return true;
  };

  const handleChange = ({ target: { name, value } }) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(data);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        name="username"
        value={data.username}
        onChange={handleChange}
        className="form-control mb-2"
      />
      {errmsg.username && (
        <label className="text-danger">{errmsg.username}</label>
      )}

      <button className="btn btn-primary w-100" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export function FormData() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    // e => synthetic event
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);

    // when you send data to server then use formdata
    const formdata = new FormData();
    formdata.append("username", data?.username);
    formdata.append("password", data?.password);

    setData({
      username: "",
      password: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="mb-2"> auth form </label>
        <input
          type="email"
          name="username"
          value={data?.username}
          onChange={handleChange}
          autoComplete="email webauthn"
          placeholder="enter username"
          className="form-control mb-2"
        />
        <input
          type="password"
          name="password"
          value={data?.password}
          onChange={handleChange}
          autoComplete="new-password webauthn"
          placeholder="enter password"
          className="form-control mb-2"
        />

        <button className="btn btn-primary w-100" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export function CheckBox() {
  const ref = useRef({
    github: true,
    sameKey: "true",
    user: "dev",
  });

  const [data, setData] = useState(ref.current);

  function handleChange(e) {
    const { name, value, checked, type, role } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? (role === "switch" ? value : checked) : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    setData(ref.current);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="github"
          className="form-check-input"
          onChange={handleChange}
          checked={data?.github}
        />

        {/* one at a time */}

        <div className="form-check form-switch">
          <input
            type="checkbox"
            name="sameKey"
            role="switch"
            value="true"
            className="form-check-input"
            onChange={handleChange}
            checked={data?.sameKey == "true"}
          />
        </div>

        <div className="form-check form-switch">
          <input
            type="checkbox"
            name="sameKey"
            role="switch"
            value="false"
            className="form-check-input"
            onChange={handleChange}
            checked={data?.sameKey == "false"}
          />
        </div>

        {/* option */}
        <select
          className="form-select mb-2"
          name="user"
          onChange={handleChange}
        >
          {["dev", "prod", "uat"].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <button className="btn btn-primary w-100" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export function File() {
  function handleChange(e) {
    const file = e.target.files[0];

    if (file) {
      const data = new FormData();
      data.append("myFile", file);
      // for (let [key, value] of data.entries()) {
      //   console.log(`${key}:`, value);
      // }
    } else {
      console.error("No file selected");
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        className="form-control"
        onChange={handleChange}
      />
    </div>
  );
}
