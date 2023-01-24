import styles from "./PostDetail.module.css";

import React from "react";
import { Link } from "react-router-dom";

function PostDetail({ post }) {
    return (
        <>
            <div className={styles.container_post__detail}>
                <div>
                    <h2>{post.title}</h2>
                    <div className={styles.post_image}>
                        <img
                            src={post.image}
                            alt={post.title}
                            // style={{ width: "100%", height: "80%" }}
                        />
                    </div>
                    {/* <p>{post.body}</p> */}

                    <div className={styles.list_tags__post}>
                        <ul>
                            {post.tagsArray.map((tag) => (
                                <>
                                    <li key={tag}>
                                        <span>#</span>
                                        {tag}
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                    <button>
                        <Link to={`/post/${post.id}`}>Ler</Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default PostDetail;
