import React from 'react'
import { Box, Typography } from '@mui/material'
import { NoteEntryType } from '@/type'
import { format, isSameDay } from 'date-fns'
import DateTitle from '@components/TimelineView/DateTitle'

const TimelineItem = ({ note, prevTime }: { note: NoteEntryType, prevTime?: number }) => {
    return (
        <Box>
            {
                (!prevTime || !isSameDay(note.timestamp, prevTime)) &&
                <DateTitle timestamp={note.timestamp} />
            }
            <Box textAlign={'left'} p={2} border={1} borderColor={'grey.300'} borderRadius={1}>
                <Typography mr={2} display={'inline-block'}>{format(note.timestamp, 'HH:mm')}</Typography>
                <Typography display={'inline-block'}>{note.content}</Typography>
            </Box>
        </Box>
    )
}
export default TimelineItem