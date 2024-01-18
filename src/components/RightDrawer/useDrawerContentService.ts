import { NoteEntryType, TagType } from '@/type'
import { writeFile } from '@/utils/writeToJson'
import React from 'react'

const flattenTags = (tags: any) => {
    const result: string[] = []
    const getTagName = (tag: TagType, parentName?: string) => {
        if (tag.children) {
            tag.children.forEach((child: any) => {
                parentName ? getTagName(child, parentName + '/' + tag.tagName) : getTagName(child, tag.tagName)
            })
        } else {
            parentName ? result.push(parentName + '/' + tag.tagName) : result.push(tag.tagName)
        }
        return
    }
    tags.forEach((tag: any) => {
        getTagName(tag, '')
    })
    return result
}

const useDrawerContentService = ({ notes, tags }: { notes: NoteEntryType[], tags: TagType[] }) => {
    const getTagName = (tagId: string) => {
        // TODO: retrieve tagName from tagId
    }
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