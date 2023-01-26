import styles from "./CreatePost.module.css";
import stylesPattern from "../CSS/pagesIndex.module.css";

import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const { user } = useAuthValue();

    const navigate = useNavigate();

    const { insertDocument, response } = useInsertDocument("posts");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // validate image
        try {
            new URL(image);
        } catch (error) {
            return setFormError("A imagem precisa ser uma URL.");
        }

        // create tags array
        const tagsArray = tags
            .split(",")
            .map((tag) => tag.trim().toLowerCase());

        // check values
        if (!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os campos!");
        }
        console.log(formError);
        if (formError) return;

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        });

        // redirect to home page
        navigate("/");
    };

    return (
        <div className={stylesPattern.container}>
            <h1>Criar post</h1>
            <div className={styles.container_post}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Título:</span>
                        <input
                            name="text"
                            required
                            placeholder="Pense num bom título..."
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
                            placeholder="Insira uma imagem que representa seu post"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                        />
                    </label>
                    <label>
                        <span>Conteúdo:</span>

                        <textarea
                            name="body"
                            required
                            placeholder="Insira o conteúdo do post"
                            onChange={(e) => setBody(e.target.value)}
                            value={body}
                        ></textarea>
                    </label>
                    <label>
                        <span>Tags:</span>
                        <input
                            type="text"
                            name="tags"
                            required
                            placeholder="Insira as tags separadas por vírgula"
                            onChange={(e) => setTags(e.target.value)}
                            value={tags}
                        />
                    </label>
                    {(response.error || formError) && (
                        <p className="error">{response.error || formError}</p>
                    )}
                    {!response.loading && <button>Criar post!</button>}
                    {response.loading && <button disabled>Aguarde.. .</button>}
                    {console.log(response.loading)}
                    {console.log(response.error)}
                    {console.log(formError)}
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
