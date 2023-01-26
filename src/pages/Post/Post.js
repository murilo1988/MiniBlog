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
                    <div className={styles.container_body}>
                        <div className={styles.title_post}>
                            <h1>{post.title}</h1>
                        </div>

                        <div className={styles.body_post}>
                            <div className={styles.body_img}>
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className={styles.body_text}>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Post;
