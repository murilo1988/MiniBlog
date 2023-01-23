import React from "react";
// CSS
import stylesPattern from "../CSS/pagesIndex.module.css";
import styles from "./Home.module.css";
import { AiOutlineSearch } from "react-icons/ai";

//hookes
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Home() {
    const [query, setQuery] = useState("");
    const [posts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefautl();
    };
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
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </label>
                </form>
                <div className={styles.posts_home}>
                    <h2>Posts</h2>
                    {!posts && posts.length === 0 && (
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
