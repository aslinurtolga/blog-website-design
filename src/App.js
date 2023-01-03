import TopBar from "./components/topbar/TopBar";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">{user ? <Home /> : <Single />}</Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
