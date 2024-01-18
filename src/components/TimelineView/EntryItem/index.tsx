import React from 'react'
import { Box, Chip, Typography } from '@mui/material'
import { format } from 'date-fns'
import { NoteEntryType } from '@/type'
import useEntryItemService from '@components/TimelineView/EntryItem/useEntryItemService'

const Item = ({ note }: { note: NoteEntryType }) => {
    const { handleEntryClick } = useEntryItemService(note)
    return (
        <Box textAlign={'left'} p={2} border={1} borderColor={'grey.300'} borderRadius={1}
             onClick={handleEntryClick}>
            <Typography mr={2} display={'inline-block'}>{format(note.timestamp, 'HH:mm')}</Typography>
            {!!note.tags.length && <Box mr={2} display={'inline-block'}>{note.tags.map(tag =>
                <Chip label={tag} key={tag} />,
            )}</Box>}
            <Typography display={'inline-block'}>{note.content}</Typography>
        </Box>
    )
}
export default Item