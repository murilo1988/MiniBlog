import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, TimeStamp } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null,
};

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, erro: false };
        case "INSERT_DOC":
            return { loading: false, error: true };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const useInsertDocument = (doccolletion) => {
    const [response, dispatch] = useReducer(insertReducer, initialState);

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(false);
        }
    };

    const insertDocument = async (document) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
            payload: insertDocument,
        });
        try {
            const newDocument = { ...document, createDat: TimeStamp.now() };

            const insertDocument = await addDoc(
                collection(db, doccolletion),
                newDocument,
            );
            checkCancelBeforeDispatch({
                type: "INSERT_DOC",
                payload: insertDocument,
            });
        } catch (error) {
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.messagem,
            });
        }
    };

    useEffect(() => {
        return setCancelled(true);
    }, []);

    return { insertDocument, response };
};
