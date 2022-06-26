import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import LoginPage from "./pages/LoginPage";
function App() {
  const [login, setLogin] = useState(false);
  
  console.log(login);

  if (login) {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    );
  }

  return (
    <div>
      {/* <button onClick={e=>setLogin(preVal=>!preVal)}>Click Me</button> */}
      <LoginPage setLogin={setLogin}/>
    </div>
  );
}
export default App;
