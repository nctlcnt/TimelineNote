import React from 'react'
import {
    Box, Button,
    Chip, Divider,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    Popper,
    Stack,
    TextField,
} from '@mui/material'
import useNoteInputService from '@components/NoteInput/useNoteInputService'
import ModeIcon from '@mui/icons-material/Mode'

const Index = () => {
    const {
        newNote,
        setNewNote,
        onKeyDown,
        handleClick,
        anchorEl,
        open,
        handleMenuOpen,
        handleClose,
        handleCreateClick,
        entryTags,
    } = useNoteInputService()

    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Box p={2}>
            <Grid container>
                <Grid item xs={11}>
                    <TextField
                        value={newNote}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                {entryTags.map((item) => <Chip key={item} label={item} />)}
                            </InputAdornment>,
                        }}
                        fullWidth={true}
                        onChange={(event) => {
                            handleMenuOpen(event)
                            setNewNote(event.target.value)
                        }}
                        onFocus={handleMenuOpen}
                        onKeyDown={onKeyDown}
                        variant={'outlined'}
                        label={'Note'} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={handleClick}><ModeIcon /></IconButton>
                </Grid>
                <Popper
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open && !!newNote}
                    autoFocus={false}
                    sx={{ width: '100%', textAlign: 'left', pb: 2 }}

                >
                    <Paper sx={{ width: '88%', ml: 2 }}>
                        <Stack>
                            <Box p={1}>
                                <Button fullWidth={true} onClick={handleCreateClick}>
                                    Create new tag: "{newNote}"
                                </Button>
                            </Box>
                            <Divider />
                            <Box p={2} onClick={handleClose}>
                                {sample.map((item: number) => <Chip key={item} label={'tag' + item} sx={{ mr: 1 }} />)}
                            </Box>
                        </Stack>
                    </Paper>
                </Popper>
            </Grid>
        </Box>
    )
}

export default Index