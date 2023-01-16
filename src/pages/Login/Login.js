import React from "react";

import styles from "./Login.module.css";

function Login() {
    return (
        <div className={styles.container_login}>
            <h1>Entrar</h1>
            <form className={styles.form_login}>
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
                        name="senha"
                        required
                        placeholder="Senha usuário"
                    />
                </label>
                <button
                    type="submit"
                    value="Entrar"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;
