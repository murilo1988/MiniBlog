import React, { useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

//CSS
import styles from "./DropDownList.module.css";

function DropdownList() {
    const { logout } = useAuthentication();
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
                            <button
                                onClick={logout}
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.inactive
                                }
                            >
                                Sair
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default DropdownList;
