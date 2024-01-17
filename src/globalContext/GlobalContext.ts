import {createContext, Dispatch} from 'react';
import {NoteEntryType} from "../type";

export type GlobalContextType = {
    notes: NoteEntryType[]
    setNotes: Dispatch<NoteEntryType[]>
    rightDrawerOpen: boolean
    setRightDrawerOpen: Dispatch<boolean>
}

class GlobalContextClass {
    notes: NoteEntryType[] = []
    setNotes: Dispatch<NoteEntryType[]> = () => {
    }

    constructor() {
        this.notes = []
        this.setNotes = () => {
        }
    }
}


const MyContext = createContext(new GlobalContextClass() as GlobalContextType);
export default MyContext;