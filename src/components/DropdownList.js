import React from "react";

import { NavLink } from "react-router-dom";

//CSS
import styles from "./DropDownList.module.css";

function DropdownList() {
    return (
        <>
            <div className={styles.container_dropdown}>
                <div className={styles.dropdown_itens}>
                    <nav className={styles.dropdown_list}>
                        <div>
                            <NavLink
                                to="/post/create"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Criar Post
                            </NavLink>
                        </div>

                        <div>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Dashboard
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Sobre
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/logout"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Sair
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default DropdownList;
