import React from "react";

//CSS
import styles from "./Register.module.css";

// hooks
import { useState, useEffect } from "react";

function Register() {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassoword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password,
        };

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");

            return handleError();
        }
        console.log(user);

        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmpassoword("");
    };

    const handleError = () => {
        console.log(error);
        setConfirmpassoword("");
    };

    return (
        <div className={styles.container_form}>
            <h1> Cadastre-se para postar</h1>
            <form
                className={styles.form_cadastrar}
                onSubmit={handleSubmit}
            >
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Senha do usuário"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirme:</span>
                    <input
                        type="password"
                        name="confirmpassoword"
                        required
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmpassoword(e.target.value)}
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
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Register;
