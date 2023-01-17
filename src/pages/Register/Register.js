import React from "react";

//CSS
import styles from "./Register.module.css";

// hooks
import { useState, useEffect } from "react";

function Register() {
    return (
        <div className={styles.container_form}>
            <h1> Cadastre-se para postar</h1>
            <form className={styles.form_cadastrar}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do usuário"
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Senha do usuário"
                    />
                </label>
                <label>
                    <span>Confirme:</span>
                    <input
                        type="password"
                        name="confirmpassoword"
                        required
                        placeholder="Confirme sua senha"
                    />
                </label>
                <button
                    className={styles.form_cadastrar__btn}
                    type="Submit"
                    value="Cadastrar"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default Register;
