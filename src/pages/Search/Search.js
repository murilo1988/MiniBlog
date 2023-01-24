import React from "react";
import stylesPattern from "../CSS/pagesIndex.module.css";

//kooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

//components
import PostDetail from "../../components/PostDetail";

//Route
import { Link } from "react-router-dom";

//CSS
import styles from "./Search.module.css";

function Search() {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search);
    return (
        <div className={stylesPattern.container}>
            <h1>Search</h1>
            <div className={styles.container_search}>
                {posts && posts.length === 0 && (
                    <>
                        <h4>
                            Não foram encontrados posts a partir de sua busca..
                        </h4>
                        <button>
                            <Link to="/">voltar</Link>
                        </button>
                    </>
                )}
                {posts &&
                    posts.map((post) => (
                        <>
                            <PostDetail key={post.id} post={post} />
                        </>
                    ))}
            </div>
        </div>
    );
}

export default Search;
