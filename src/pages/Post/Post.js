import React from "react";
import stylesPattern from "../CSS/pagesIndex.module.css";

import styles from "./Post.module.css";

//hooks
import { useParams } from "react-router-dom";
import { useFetchPost } from "../../hooks/useFetchPost";

function Post() {
    const { id } = useParams();
    const { post } = useFetchPost("posts", id);

    return (
        <div className={stylesPattern.container}>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <div className={styles.container_body}>
                        <p>{post.body}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Post;
