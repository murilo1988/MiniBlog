import styles from "./Login.module.css";
import stylesAll from "../CSS/pagesIndex.module.css";

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password,
        };

        const res = await login(user);

        console.log(res);
    };

    useEffect(() => {
        console.log(authError);
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={stylesAll.container}>
            <h1>Entrar</h1>
            <div className={styles.container_login}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>E-mail:</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="E-mail do usuário"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label>
                        <span>Senha:</span>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Insira a senha"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                    {error && <p className="error">{error}</p>}
                    {!loading && <button>Entrar</button>}
                    {loading && <button disabled>Aguarde...</button>}
                </form>
            </div>
        </div>
    );
};

export default Login;
