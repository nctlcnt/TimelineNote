import React, {useEffect, useState} from "react";
import GlobalContext from "./GlobalContext";
import {NoteEntryType} from "../type";

// global context provider
export const GlobalContextProvider = ({children}: any) => {
    const [notes, setNotes] = useState<NoteEntryType[]>([]);

    // scroll to bottom on new note
    useEffect(() => {
        const element = document.getElementById('timeline');
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }, [notes]);

    return (
        <GlobalContext.Provider value={{notes, setNotes}}>
            {children}
        </GlobalContext.Provider>
    );
}