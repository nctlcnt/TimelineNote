import React from 'react';
import {Box, TextField} from "@mui/material";
import GlobalContext from "../globalContext/GlobalContext";
import {NoteEntryType} from "../type";

const NoteInput = () => {
    const {setNotes} = React.useContext(GlobalContext);
    const [newNote, setNewNote] = React.useState<string>('');
    const onNoteSubmit = (value: any) => {
        const newEntry: NoteEntryType = {
            content: value,
            timestamp: new Date().getTime(),
            id: Math.random().toString(36).substring(7),
            tags: []
        };

        // @ts-ignore
        setNotes((prevNotes: NoteEntryType[]) => {
            return [...prevNotes, newEntry] as NoteEntryType[];
        });

    }

    const onKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            onNoteSubmit(newNote);
            setNewNote('');
        }
    }
    return (
        <Box p={2}>
            <TextField variant={'outlined'} placeholder={'Note'} fullWidth={true} value={newNote}
                       onChange={(event) => setNewNote(event.target.value)} onKeyDown={onKeyDown}/>
        </Box>
    );
}

export default NoteInput;