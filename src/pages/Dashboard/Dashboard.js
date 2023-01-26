import React from "react";
import stylesPattern from "../CSS/pagesIndex.module.css";
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

function Dashboard() {
    const { user } = useAuthValue();
    const uid = user.id;

    const {
        documents: posts,
        loading,
        error,
    } = useFetchDocuments("posts", null, uid);

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
                    <div className={styles.posts}>
                        <p>Gerencie os seus posts</p>
                    </div>
                )}

                {posts &&
                    posts.map((post) => <h3 key={post.id}>{post.title}</h3>)}
            </div>
        </div>
    );
}

export default Dashboard;
