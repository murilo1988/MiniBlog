//hooks
import { useState, useEffect } from "react";

// db
import { db } from "../firebase/config";

import { doc, getDoc } from "firebase/firestore";

export const useFetchPost = (docColletction, id) => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);

            try {
                const docRef = await doc(db, docColletction, id);
                const docSnap = await getDoc(docRef);

                setPost(docSnap.data());
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
        loadPost();
    }, [docColletction, id]);

    return { post, loading, error };
};
