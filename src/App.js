import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

//Context
import { AuthProvider } from "./context/AuthContext";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Post from "./pages/Post/Post";

// CSS
import "./App.css";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DropdownList from "./components/DropdownList";
import Search from "./pages/Search/Search";

function App() {
    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();

    const loadingUser = user === undefined;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [auth]);

    if (loadingUser) {
        return (
            <p style={{ fontSize: "1.4em", textAlign: "center" }}>
                Carregando ...
            </p>
        );
    }

    return (
        <div className="App">
            <AuthProvider value={{ user }}>
                <BrowserRouter>
                    <NavBar />

                    <div className="container">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    user ? <Home /> : <Login to="/login" />
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    !user ? <Login /> : <Navigate to="/" />
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    !user ? <Register /> : <Navigate to="/" />
                                }
                            />
                            <Route
                                path="/home"
                                element={
                                    user ? <Home /> : <Navigate to="/login" />
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    user ? <About /> : <Navigate to="/login" />
                                }
                            />
                            <Route
                                path="/search"
                                element={
                                    user ? <Search /> : <Navigate to="/login" />
                                }
                            />

                            <Route
                                path="/post/create"
                                element={
                                    user ? (
                                        <CreatePost />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />

                            <Route
                                path="/post/:id"
                                element={
                                    user ? <Post /> : <Navigate to="/login" />
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    user ? (
                                        <Dashboard />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />

                            <Route
                                path="/dropdownlist"
                                element={
                                    user ? (
                                        <DropdownList />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
