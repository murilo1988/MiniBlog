import React from "react";

import { Link } from "react-router-dom";

// CSS
import styles from "./About.module.css";
import stylesPattern from "../CSS/pagesIndex.module.css";

function About() {
    return (
        <div className={stylesPattern.container}>
            <h1>
                Sobre o mini <span className={styles.brand}>Blog</span>
            </h1>
            <div className={styles.about}>
                <p>
                    Este projeto foi criado com o intuito de Criar e controlar
                    as postagens de fotos, comentário e likes{" "}
                </p>
                <p>
                    Ele utiliza JavaScript com React no front-end e Firebase no
                    back-end
                </p>
                <Link to="/post/create">
                    <button>Criar post</button>
                </Link>
            </div>
        </div>
    );
}

export default About;
