import { TagType } from '@/type'
import { Dispatch } from 'react'

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

const useTags = ({ tags, setTags }: { tags: TagType[], setTags: Dispatch<TagType[]> }) => {
    const createTag = (value: string) => {
        // @ts-ignore
        const newTag: TagType = new NewTag({
            tagName: value,
        })
        console.log(tags)
        // @ts-ignore
        setTags((prevTags: TagType[]) => {
            return [...prevTags, newTag] as TagType[]
        })
    }

    // TODO: search tag?
    // TODO: change tag structure?
    // const searchTag = (value: string): TagType[] => {
    //     const result: TagType[] = []
    //
    // }

    return {
        createTag,
    }

}

export default useTags