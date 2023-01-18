import React from "react";

import styles from "./DropDownList.module.css";

function DropdownList() {
    return (
        <>
            <div className={styles.container_dropdown}>
                <nav className={styles.dropdown_list}>
                    <ul>
                        <li>Criar Post</li>
                        <li>Dashboard</li>
                        <li>Sobre</li>
                        <li>Sair</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default DropdownList;
