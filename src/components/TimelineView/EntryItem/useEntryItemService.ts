import { NoteEntryType } from '@/type'

const useEntryItemService = (entry: NoteEntryType) => {
    const handleEntryClick = () => {
        console.log(entry)
    }
    return {
        handleEntryClick
    }
}

export default useEntryItemService