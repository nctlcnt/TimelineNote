import React from 'react'
import GlobalContext from '@globalContext/GlobalContext'


const useNoteInputService = () => {
    const { setRightDrawerOpen, createTag, createNote } = React.useContext(GlobalContext)
    const [newNote, setNewNote] = React.useState<string>('')
    const [entryTags, setEntryTags] = React.useState<string[]>([])

    // handle drawer open
    const onDrawerButtonClick = () => {
        // @ts-ignore
        setRightDrawerOpen((prev: boolean) => !prev)
    }

    // handle new note and tag
    const addNewNote = (value: any) => {
        createNote(value, entryTags)
        setEntryTags([])
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
            createTag(newNote)
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
        createNewTag: createTag,
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
