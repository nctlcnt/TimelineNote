import React from 'react'
import { NoteEntryType, TagType } from '@/type'
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

class NewTag {
    tagId: string
    tagName: string
    parentId: string

    constructor({ tagId, tagName, parentId }: Partial<TagType>) {
        this.tagId = tagId || Math.random().toString(36).substring(7)
        this.tagName = tagName || ''
        this.parentId = parentId || ''
    }
}

const useNoteInputService = () => {
    const { setNotes, setRightDrawerOpen, setTags } = React.useContext(GlobalContext)
    const [newNote, setNewNote] = React.useState<string>('')

    const [entryTags, setEntryTags] = React.useState<string[]>([])

    // handle drawer open
    const onDrawerButtonClick = () => {
        // @ts-ignore
        setRightDrawerOpen((prev: boolean) => !prev)
    }

    // handle new note and tag
    const addNewNote = (value: any) => {
        const newEntry: NoteEntryType = new NewNote({
            content: value,
            tags: entryTags,
        })
        setEntryTags([])

        // @ts-ignore
        setNotes((prevNotes: NoteEntryType[]) => {
            return [...prevNotes, newEntry] as NoteEntryType[]
        })

    }

    const createNewTag = (value: any) => {
        const newTag: TagType = new NewTag({
            tagName: value,
        })

        // @ts-ignore
        setTags((prevTags: TagType[]) => {
            return [...prevTags, newTag] as TagType[]
        })
    }

    // handle new note submit
    const onKeyDown = (event: any) => {
        // TODO: tags should be required but content should not
        if (event.key === 'Enter' && newNote !== '') {
            addNewNote(newNote)
            setNewNote('')
        }
    }

    // menu related
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const onCreateButtonClick = () => {
        if (entryTags.length < 3) {
            createNewTag(newNote)
            setEntryTags((prev: string[]) => {
                return [...prev, newNote]
            })
            setAnchorEl(null)
            setNewNote('')

        }
    }


    return {
        newNote,
        setNewNote,
        onKeyDown,
        onNoteSubmit: addNewNote,
        createNewTag,
        handleClick: onDrawerButtonClick,
        anchorEl,
        open,
        handleMenuOpen,
        handleClose: handleMenuClose,
        handleCreateClick: onCreateButtonClick,
        entryTags,

    }
}

export default useNoteInputService
