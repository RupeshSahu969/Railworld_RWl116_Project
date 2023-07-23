import "./App.css";
import Navbar from "./Components/Navbar";
import Sidbar from "./Components/Sidbar";
import Home from "./Pages/Home";
import Login from "./Login/Login";
import MainRoutes from "./Pages/MainRoutes";
import Title from "./Pages/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Sidbar />
      {/* <Login/> */}
      {/* <MainRoutes/> */}
    </div>
  );
}

export default App;
