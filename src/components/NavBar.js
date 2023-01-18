import React from "react";

import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
//Hooks
import { useState } from "react";

//Css
import styles from "./NavBar.module.css";
import { FaBars } from "react-icons/fa";

function NavBar() {
    const { user } = useAuthValue();

    const [open, setOpen] = useState(false);

    const handleIsOpen = () => {
        return setOpen(!open);
    };

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
                        <li className={styles.drop_menu_icon}>
                            <button>
                                <NavLink
                                    to="dropdownlist"
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.active
                                            : styles.inactive
                                    }
                                >
                                    <i>
                                        <FaBars />
                                    </i>
                                </NavLink>
                            </button>
                        </li>
                        <li>
                            <NavLink
                                to="/post/create"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Criar Post
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
                        <li>
                            <NavLink
                                to="/logout"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Sair
                            </NavLink>
                        </li>
                    </>
                )}
                {!user && (
                    <>
                        <ul>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.active
                                            : styles.inactive
                                    }
                                >
                                    Entrar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.active
                                            : styles.inactive
                                    }
                                >
                                    Cadastrar
                                </NavLink>
                            </li>
                        </ul>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;

