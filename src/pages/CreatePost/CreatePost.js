import styles from "./CreatePost.module.css";
import stylesPattern from "../CSS/pagesIndex.module.css";

import { useState, useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const { login, error: authError, error, loading } = useAuthentication();

    const searchInput = useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log(searchInput);

    return (
        <div className={stylesPattern.container}>
            <h1>Criar post</h1>
            <div className={styles.container_post}>
                <p>Compartilhe seus momentos </p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Titulo:</span>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Título da postagem"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </label>
                    <label>
                        <span>URL da imagem:</span>
                        <input
                            type="text"
                            name="image"
                            required
                            placeholder="Imagem da postagem"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                        />
                    </label>
                    <label>
                        <span>Conteúdo:</span>
                        <textarea
                            ref={searchInput}
                            rows="3"
                            type="text"
                            name="body"
                            required
                            placeholder="Insirao contúdo do post"
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                    </label>
                    <label>
                        <span>Maque suas tags</span>
                        <input
                            type="text"
                            name="tags"
                            required
                            placeholder="Crie suas tags"
                            onChange={(e) => setTags(e.target.value)}
                            value={tags}
                        />
                    </label>
                    {!loading && <button>Postar</button>}
                    {loading && <button>Aguarde..</button>}
                    {error && <p className="error"> {error}</p>}
                </form>
            </div>
        </div>
    );
}
