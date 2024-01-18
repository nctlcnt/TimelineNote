import React from 'react'
import { Box } from '@mui/material'
import { NoteEntryType } from '@/type'
import {  isSameDay } from 'date-fns'
import DateTitle from '@components/TimelineView/DateTitle'
import EntryItem from '@components/TimelineView/EntryItem'

const TimelineItem = ({ note, prevTime }: { note: NoteEntryType, prevTime?: number }) => {
    return (
        <Box>
            {
                (!prevTime || !isSameDay(note.timestamp, prevTime)) &&
                <DateTitle timestamp={note.timestamp} />
            }
            <EntryItem note={note} />
        </Box>
    )
}
export default TimelineItem