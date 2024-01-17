import React from 'react'
import { NoteEntryType } from '@/type'
import GlobalContext from '@globalContext/GlobalContext'

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

const useNoteInputService = () => {
    const { setNotes,setRightDrawerOpen } = React.useContext(GlobalContext)
    const [newNote, setNewNote] = React.useState<string>('')
    const onNoteSubmit = (value: any) => {
        const newEntry: NoteEntryType = new NewNote({
            content: value,
        })

        // @ts-ignore
        setNotes((prevNotes: NoteEntryType[]) => {
            return [...prevNotes, newEntry] as NoteEntryType[]
        })

    }

    const onKeyDown = (event: any) => {
        // TODO: tags should be required
        if (event.key === 'Enter' && newNote !== '') {
            onNoteSubmit(newNote)
            setNewNote('')
        }
    }

    return {
        newNote,
        setNewNote,
        onKeyDown,
        onNoteSubmit,
        setRightDrawerOpen
    }
}

export default useNoteInputService
