import React from "react";
// CSS
import stylesPattern from "../CSS/pagesIndex.module.css";
import styles from "./Home.module.css";
import { AiOutlineSearch } from "react-icons/ai";

//hookes
import { useNavigate, link } from "react-router-dom";
import { useState } from "react";

function Home() {
    return (
        <div className={stylesPattern.container}>
            <h1>Postagens mais recentes</h1>
            <div className={styles.container_home}>
                <form>
                    <label>
                        <input type="text" placeholder="Ou busque por tags" />
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Home;
