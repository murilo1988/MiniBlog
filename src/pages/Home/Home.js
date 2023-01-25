import React from "react";
// CSS
import stylesPattern from "../CSS/pagesIndex.module.css";
import styles from "./Home.module.css";
import { AiOutlineSearch } from "react-icons/ai";

import { useNavigate, Link } from "react-router-dom";
//hookes
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// Components
import PostDetail from "../../components/PostDetail";

function Home() {
    const [query, setQuery] = useState("");
    const { documents: posts, loading, error } = useFetchDocuments("posts");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            return navigate(`/search?q=${query}`);
        }
    };

    console.log(loading);
    console.log(posts);
    return (
        <div className={stylesPattern.container}>
            <h1>Postagens mais recentes</h1>
            <div className={styles.container_home}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            placeholder="Ou busque por tags"
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                        />
                        {!loading && (
                            <button>
                                <AiOutlineSearch />
                            </button>
                        )}
                        {loading && (
                            <button disabled>
                                <AiOutlineSearch />
                            </button>
                        )}
                    </label>
                </form>

                <div className={styles.posts_home}>
                    {loading && <p>Carregando..</p>}

                    {posts &&
                        posts.map((post) => (
                            <PostDetail key={post.id} post={post} />
                        ))}

                    {posts && posts.length === 0 && (
                        <div className={styles.no_posts}>
                            <p> Não foram encontrados posts</p>
                            <Link to="/post/create">
                                <button>Criar primeiro post</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
