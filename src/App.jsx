import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signin from "./pages/auth/Signin";
import Verification from "./pages/auth/Verification";
import { useEffect } from "react";

import ProfilePage from "./pages/ProfilePage";
import Layout from "./layout/Index"; // Instead of Sidebar
import Messages from "./pages/Messages";

const App = () => {
  useEffect(() => {
    const colorMode = JSON.parse(window.localStorage.getItem("color-theme"));

    const className = "dark";

    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, []);

  return (
    <Routes>
      {/* {Redirect / to /auth/login} */}

      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signin />} />
      <Route path="/auth/verify" element={<Verification />} />

      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Messages />} />  {/* Fixed: Add index route */}
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
