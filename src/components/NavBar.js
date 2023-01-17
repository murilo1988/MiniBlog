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
                    <NavLink
                        className={styles.brand}
                        to="/home"
                    >
                        Mini <span>Blog</span>
                    </NavLink>
                </>
            )}
            {!user && (
                <>
                    <NavLink
                        className={styles.brand}
                        to="/"
                    >
                        Mini <span>Blog</span>
                    </NavLink>
                </>
            )}

            <ul className={styles.links_list}>
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
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.inactive
                        }
                    >
                        About
                    </NavLink>
                </li>
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

