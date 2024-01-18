import React from 'react'
import { Box, Button, Chip, Divider } from '@mui/material'
import GlobalContext from '@globalContext/GlobalContext'
import useDrawerContentService from '@components/RightDrawer/useDrawerContentService'

const DrawerContent = () => {
    const { tags, notes } = React.useContext(GlobalContext)
    const { onSaveButtonClick, tagList } = useDrawerContentService({ notes, tags })

    return (
        <Box p={1}>
            <Button variant={'outlined'} onClick={onSaveButtonClick}>Backup data to JSON</Button>
            <Divider sx={{ my: 1 }} />
            <Box>
                {tagList.map((tag: any) => <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />)}
            </Box>
        </Box>
    )
}
export default DrawerContent