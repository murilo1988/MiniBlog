import React from "react";

import { NavLink } from "react-router-dom";

//CC
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <NavLink
                className={styles.brand}
                to="/login"
            >
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
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
            </ul>
        </nav>
    );
}

export default NavBar;
