import { Route, Routes } from "react-router-dom";
import Messages from "./pages/Messages";

const App = () => {
  return (
    <Routes>
      <Route index={true} element={<Messages />} />
    </Routes>
  );
};

export default App;
