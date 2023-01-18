import React from "react";

import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
//Css
import styles from "./NavBar.module.css";

function NavBar() {
    const { user } = useAuthValue();
    return (
        <nav className={styles.navbar}>
            {user && (
                <>
                    <NavLink className={styles.brand} to="/home">
                        Mini <span>Blog</span>
                    </NavLink>
                </>
            )}
            {!user && (
                <>
                    <NavLink className={styles.brand} to="/login">
                        Mini <span>Blog</span>
                    </NavLink>
                </>
            )}

            <ul className={styles.links_list}>
                {user && (
                    <>
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/post/create"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Novo Post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Sobre
                            </NavLink>
                        </li>
                    </>
                )}
                {!user && (
                    <>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;

