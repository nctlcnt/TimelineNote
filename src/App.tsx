import React from 'react'
import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Index from '@/components/NoteInput'
import { Box } from '@mui/material'
import TimelineView from '@/components/TimelineView'
import GlobalContext from './globalContext/GlobalContext'
import useGlobalContext from '@globalContext/useGlobalContext'
import RightDrawer from '@components/RightDrawer'

function App() {
    const values = useGlobalContext()
    return (
        <div className="App">
            <GlobalContext.Provider value={values}>
                <Box justifyContent="space-between" flexDirection={'column'} display={'flex'} height={'100vh'}>
                    <Box flexGrow={1} sx={{ overflowY: 'auto' }} id="timeline">
                        <TimelineView />
                    </Box>
                    <Box>
                        <Index />
                    </Box>
                </Box>
                <RightDrawer/>
            </GlobalContext.Provider>

        </div>
    )
}

export default App
