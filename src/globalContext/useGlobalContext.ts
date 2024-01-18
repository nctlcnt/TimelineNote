import useInitDataService from '@globalContext/useInitDataService'
import { useEffect, useState } from 'react'
import { NoteEntryType, TagType } from '@/type'

const useGlobalContext = () => {
    const { initNotes, initTags } = useInitDataService()
    const [notes, setNotes] = useState<NoteEntryType[]>([])
    const [tags, setTags] = useState<TagType[]>([])

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
    }
}
export default useGlobalContext