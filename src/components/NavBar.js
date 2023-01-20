import React from "react";

import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
//components
import DropdownList from "./DropdownList";

//Hooks
import { useState } from "react";

//Css
import styles from "./NavBar.module.css";
import { FaBars } from "react-icons/fa";

function NavBar() {
    const { user } = useAuthValue();

    const [open, setOpen] = useState(false);

    const { logout } = useAuthentication();

    const handleIsOpen = () => {
        setOpen(!open);
    };

    console.log(open);
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
                            <button onClick={(e) => handleIsOpen(e.target)}>
                                <FaBars />
                            </button>
                        </li>

                        <div>
                            {open && (
                                <DropdownList
                                    className={styles.drop_transition}
                                />
                            )}
                        </div>

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
                            <NavLink to="/login">
                                <button
                                    onClick={logout}
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.active
                                            : styles.inactive
                                    }
                                >
                                    Sair
                                </button>
                            </NavLink>
                        </li>
                    </>
                )}
                {!user && (
                    <>
                        <ul className={styles.links_list}>
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

