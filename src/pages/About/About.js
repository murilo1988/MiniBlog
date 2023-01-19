import React from "react";
// CSS
import styles from "./About.module.css";
import stylesPattern from "../CSS/pagesIndex.module.css";

function About() {
    return (
        <div className={stylesPattern.container}>
            <div className={styles.container}>
                <h2>
                    Sobre o mini <span className={styles.brand}>Blog</span>
                </h2>
                <p>
                    Este projeto foi criado com o intuito de Criar e controlar
                    as postagens de fotos comentário e likes{" "}
                </p>
                <p>
                    Ele utiliza JavaScript com React no front-end e Firebase no
                    back-end
                </p>
            </div>
        </div>
    );
}

export default About;

