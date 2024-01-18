export type NoteEntryType = {
    timestamp: number
    content: string
    id: string
    tags: string[]
}

export type TagType = {
    tagId: string
    tagName: string
    parentId?: string
    children?: TagType[]
}

export type InitDataType = {
    initNotes: NoteEntryType[]
    initTags: TagType[]
}