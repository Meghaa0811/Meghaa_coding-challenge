import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddPlayer from "../pages/AddPlayer";
import EditPlayer from "../pages/EditPlayer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-player" element={<AddPlayer />} />
        <Route path="/edit-player/:playerId" element={<EditPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;