import notesData from '../data/notes.json'
import tagsData from '../data/tags.json'
import { InitDataType } from '@/type'
import { useMemo } from 'react'


const useInitDataService = (): InitDataType => {
    const initNotes = useMemo(() => {
        return notesData
    }, [])
    const initTags = useMemo(() => {
        return tagsData
    }, [])

    return {
        initNotes,
        initTags,
    }
}
export default useInitDataService