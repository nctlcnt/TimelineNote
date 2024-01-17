import useInitDataService from '@globalContext/useInitDataService'
import { useEffect, useState } from 'react'
import { NoteEntryType } from '@/type'

const useGlobalContext = () => {
    const { initNotes, initTags } = useInitDataService()
    const [notes, setNotes] = useState<NoteEntryType[]>([])

    const [rightDrawerOpen, setRightDrawerOpen] = useState(false)

    console.log(initNotes, initTags)
// scroll to bottom on new note
    useEffect(() => {
        const element = document.getElementById('timeline')
        if (element) {
            element.scrollTop = element.scrollHeight
        }
    }, [notes])

    return {
        notes,
        setNotes,
        rightDrawerOpen,
        setRightDrawerOpen,
    }
}
export default useGlobalContext