import { Route, Routes } from "react-router-dom";
import Messages from "./pages/Messages";
import Login from "./pages/auth/Login";
import Signin from "./pages/auth/Signin";
import Verification from "./pages/auth/Verification";

const App = () => {
  return (
    <Routes>
      <Route index={true} element={<Messages />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signin />} />
      <Route path="/auth/verify" element={<Verification />} />
    </Routes>
  );
};

export default App;
