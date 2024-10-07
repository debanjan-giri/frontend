import { Button } from "react-bootstrap";
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

// Routes setup
export function RoutingSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<User />} />
        {true && <Route path="/secure-page" element={<p>secure</p>} />}
      </Routes>
    </BrowserRouter>
  );
}

// page navigate using Link
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

// page navigate using useNavigate hook
function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <Button variant="primary" onClick={() => navigate("/user/45")}>
        Home Page
      </Button>
    </div>
  );
}

// useParams hook
function User() {
  // route id name and getting param id name is equal
  const { userId } = useParams();
  console.log(userId); // 45
  return (
    <div>
      <h1>User</h1>
    </div>
  );
}

// create new way routing setup
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AnotherRoutingSetup = [
  {
    path: "test",
    element: <h1>test</h1>,
  },
];

// outlet will render child route
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "user/:userId",
    element: <h1>User</h1>,
  },
  {
    path: "about",
    element: (
      <>
        <h1>About </h1>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "contact/:contactId",
        element: <h1>Contact</h1>,
      },
      {
        path: "team/my-team",
        element: <h1>Team</h1>,
      },
    ],
  },
  ...AnotherRoutingSetup,
]);

export function NewRoutingSetup() {
  return <RouterProvider router={router} />;
}
