import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AdminPanel from "./components/Admin/AdminPanel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
