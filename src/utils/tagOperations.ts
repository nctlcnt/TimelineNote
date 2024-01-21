import { TagType } from '@/type'

export const flattenTags = (tags: any) => {
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