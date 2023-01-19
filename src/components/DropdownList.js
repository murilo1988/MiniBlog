import React from "react";

import styles from "./DropDownList.module.css";

function DropdownList() {
    return (
        <>
            <div className={styles.container_dropdown}>
                <div className={styles.dropdown_itens}>
                    <nav className={styles.dropdown_list}>
                        <div>Criar Post</div>
                        <div>Dashboard</div>
                        <div>Sobre</div>
                        <div>Sair</div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default DropdownList;
