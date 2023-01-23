import styles from "./PostDetail.module.css";

import React from "react";
import { Link } from "react-router-dom";

function PostDetail({ post }) {
    return (
        <>
            <h3>{post.title}</h3>
            <div className={styles.container_post__detail}>
                <div className={styles.post_image}>
                    <img src={post.image} alt={post.title} />
                </div>
                <p>{post.body}</p>
                <h5>{post.createdBy}</h5>
                <div>
                    <ul>
                        {post.tagsArray.map((tag) => (
                            <li key={tag}>
                                <span>#</span>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <button>
                    <Link to={`/post/${post.id}`}>Ler</Link>
                </button>
            </div>
        </>
    );
}

export default PostDetail;
