import { NoteEntryType, TagType } from '@/type'
import { writeFile } from '@/utils/writeToJson'
import React from 'react'
import { flattenTags } from '@/utils/tagOperations'


const useDrawerContentService = ({ notes, tags }: { notes: NoteEntryType[], tags: TagType[] }) => {
    // const getTagName = (tagId: string) => {
    // TODO: retrieve tagName from tagId
    // }
    const onSaveButtonClick = () => {
        writeFile(JSON.stringify({ notes: notes, tags: tags }))
    }

    const [tagList] = React.useState(flattenTags(tags))

    return {
        onSaveButtonClick,
        tagList,
        flattenTags,
        getTagName,
    }
}

export default useDrawerContentService