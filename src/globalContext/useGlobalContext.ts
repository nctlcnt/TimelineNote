import useInitDataService from '@globalContext/useInitDataService'
import { useEffect, useState } from 'react'
import { NoteEntryType, TagType } from '@/type'
import useTags from '@globalContext/useTags'
import useNotes from '@globalContext/useNotes'

const useGlobalContext = () => {
    const { initNotes, initTags } = useInitDataService()
    const [notes, setNotes] = useState<NoteEntryType[]>([])
    const [tags, setTags] = useState<TagType[]>([])
    const { createTag } = useTags({ tags, setTags })
    const { createNote } = useNotes({ notes, setNotes })

    const [rightDrawerOpen, setRightDrawerOpen] = useState(false)
    useEffect(() => {
        setNotes(initNotes)
    }, [initNotes])

    // initiate tags
    useEffect(() => {
        setTags(initTags)
    }, [initTags])

// scroll to bottom on new note
    useEffect(() => {
        const element = document.getElementById('timeline')
        if (element) {
            element.scrollTop = element.scrollHeight
        }
    }, [notes])

    return {
        tags,
        setTags,
        notes,
        setNotes,
        rightDrawerOpen,
        setRightDrawerOpen,
        createTag,
        createNote,
    }
}
export default useGlobalContext