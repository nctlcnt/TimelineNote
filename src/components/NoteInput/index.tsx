import React from 'react'
import { Box, Grid, IconButton, TextField } from '@mui/material'
import useNoteInputService from '@components/NoteInput/useNoteInputService'
import ModeIcon from '@mui/icons-material/Mode'

const Index = () => {
    const { setNewNote, onKeyDown, newNote, setRightDrawerOpen } = useNoteInputService()
    const handleClick = () => {
        // @ts-ignore
        setRightDrawerOpen((prev: boolean) => !prev)
    }
    return (
        <Box p={2}>
            <Grid container>
                <Grid item xs={11}>
                    <TextField variant={'outlined'} placeholder={'Note'} fullWidth={true} value={newNote}
                               onChange={(event) => setNewNote(event.target.value)} onKeyDown={onKeyDown} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton><ModeIcon onClick={handleClick} /></IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Index