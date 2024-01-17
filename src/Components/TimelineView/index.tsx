import React from 'react'
import GlobalContext from '../../globalContext/GlobalContext'
import { Box, Stack } from '@mui/material'

const TimelineView = () => {
    const { notes } = React.useContext(GlobalContext)

    return (
        <Box>
            <Stack>
                {notes.map((note) => {
                    return (
                        <Box key={note.id} p={2} border={1} borderColor={'grey.300'} borderRadius={1}>
                            {note.content}
                        </Box>
                    )
                })}
            </Stack>
        </Box>
    )
}
export default TimelineView