import React from "react";

import { NavLink } from "react-router-dom";

//CC
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <NavLink
                className={styles.brand}
                to="/"
            >
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to="/"
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
            </ul>
        </nav>
    );
}

export default NavBar;
