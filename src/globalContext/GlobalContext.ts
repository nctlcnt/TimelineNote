import { createContext, Dispatch } from 'react'
import { NoteEntryType, TagType } from '@/type'

export type GlobalContextType = {
    notes: NoteEntryType[]
    setNotes: Dispatch<NoteEntryType[]>
    rightDrawerOpen: boolean
    setRightDrawerOpen: Dispatch<boolean>
    tags: TagType[]
    setTags: Dispatch<TagType[]>
    createTag: (value: string) => void
    createNote: (value: string, tags: string[]) => void
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


const MyContext = createContext(new GlobalContextClass() as GlobalContextType)
export default MyContext