import { NoteEntryType } from '@/type'
import { Dispatch } from 'react'

class NewNote {
    content: string
    timestamp: number
    id: string
    tags: string[]

    constructor({ content, timestamp, id, tags }: Partial<NoteEntryType>) {
        this.content = content || ''
        this.timestamp = timestamp || new Date().getTime()
        this.id = id || Math.random().toString(36).substring(7)
        this.tags = tags || []
    }
}

const useNotes = ({ notes, setNotes }: { notes: NoteEntryType[], setNotes: Dispatch<NoteEntryType[]> }) => {
    const createNote = (value: any, tags: string[]) => {
        const newEntry: NoteEntryType = new NewNote({
            content: value,
            tags: tags,
        })
        console.log(notes)
        // @ts-ignore
        setNotes((prevNotes: NoteEntryType[]) => {
            return [...prevNotes, newEntry] as NoteEntryType[]
        })

    }
    return {
        createNote,
    }
}
export default useNotes
