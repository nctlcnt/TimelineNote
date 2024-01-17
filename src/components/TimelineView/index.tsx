import React from 'react'
import GlobalContext from '@/globalContext/GlobalContext'
import { Box, Stack } from '@mui/material'
import { NoteEntryType } from '@/type'
import TimelineItem from '@/components/TimelineView/TimelineItem'

const TimelineView = () => {
    const { notes } = React.useContext(GlobalContext)

    return (
        <Box p={2}>
            <Stack>
                {notes.map((note: NoteEntryType, index: number) => <TimelineItem
                    key={note.id}
                    note={note}
                    prevTime={notes[index - 1]?.timestamp} />)}
            </Stack>
        </Box>
    )
}
export default TimelineView