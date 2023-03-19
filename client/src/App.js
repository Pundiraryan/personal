import Home from "./components/Home.js"
import SignUp from "./components/SignUp.js"
import SignIn from "./components/SignIn.js"
import Privacy from "./components/Privacy.js"
import Terms from "./components/Terms.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/loginPage/Index.js"
import ProblemsUpdate from "./components/ProblemsUpdate"
function App() {
  return (
    <>
          <BrowserRouter>
  
      <Routes>  
      <Route exact path="/" element={<Home/>} />
      {/* <Route exact path="/register" element={<Register/>} /> */}
      <Route exact path="/signin" element={<SignIn/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/problems" element={<ProblemsUpdate/>} />
      </Routes>      
      </BrowserRouter>
    </>
  );
}

export default App;
