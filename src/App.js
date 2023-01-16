import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// CSS
import "./App.css";

//components
import NavBarInitial from "./components/NavBarInitial";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBarInitial />

                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Login />}
                        />
                        <Route
                            path="/home"
                            element={<Home />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/register"
                            element={<Register />}
                        />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
