import { Routes, Route, Navigate,BrowserRouter } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  return (
      <Routes>
        <Route exact path="/dashboard/*" element={<Dashboard />} />
        <Route exact path="/auth/*" element={<Auth />} />
        <Route exact path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
  );
}

export default App;
