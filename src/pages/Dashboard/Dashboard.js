import React from "react";
import stylesPattern from "../CSS/pagesIndex.module.css";
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

function Dashboard() {
    const { user } = useAuthValue();
    const uid = user.id;

    const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
    const { deleteDocument } = useDeleteDocument("posts");

    if (loading) {
        return <p>Carregando</p>;
    }

    // posts do usuário

    return (
        <div className={stylesPattern.container}>
            <h1> Dashboard</h1>
            <div className={styles.container_dashboard}>
                {posts && posts.length === 0 ? (
                    <div className={styles.no_posts}>
                        <h3>Voce ainda não tem posts para gerenciar!</h3>
                        <p>Comece a postar </p>
                        <Link to="/post/create">
                            <button>Criar</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <h2>Gerencie os seus posts</h2>
                        <div className={styles.posts}>
                            {posts &&
                                posts.map((post) => (
                                    <div
                                        className={styles.post_individual}
                                        key={post.id}
                                    >
                                        <div>
                                            <h3>{post.title}</h3>
                                        </div>
                                        <div>
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                            />
                                        </div>
                                        <div className={styles.edit_btns}>
                                            <button
                                                className={styles.look_post}
                                            >
                                                <Link to={`/post/${post.id}`}>
                                                    {" "}
                                                    Ver Post
                                                </Link>
                                            </button>
                                            <button
                                                className={styles.edit_post}
                                            >
                                                <Link
                                                    to={`/posts/edit/${post.id}`}
                                                >
                                                    Editar
                                                </Link>
                                            </button>
                                            <button
                                                onClick={() =>
                                                    deleteDocument(post.id)
                                                }
                                                className={styles.delete_post}
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
