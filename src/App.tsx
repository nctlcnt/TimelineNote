import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NoteInput from "./Components/NoteInput";
import {Box} from "@mui/material";
import {GlobalContextProvider} from "./globalContext/GlobalContextProvider";
import TimelineView from "./Components/TimelineView";

function App() {
    return (
        <div className="App">
            <GlobalContextProvider>
                <Box justifyContent='space-between' flexDirection={'column'} display={'flex'} height={'100vh'}>
                    <Box flexGrow={1} sx={{overflowY: 'auto'}} id='timeline'>
                        <TimelineView/>
                    </Box>
                    <Box>
                        <NoteInput/>
                    </Box>
                </Box>
            </GlobalContextProvider>

        </div>
    );
}

export default App;
