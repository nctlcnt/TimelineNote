import React from 'react'
import { Drawer } from '@mui/material'
import DrawerContent from '@components/RightDrawer/DrawerContent'
import GlobalContext from '@globalContext/GlobalContext'

const RightDrawer = () => {
    const { rightDrawerOpen: open, setRightDrawerOpen } = React.useContext(GlobalContext)

    return (
        <Drawer anchor={'right'} open={open} onClose={() => setRightDrawerOpen(false)}
                sx={{
                    '.MuiPaper-root': {
                        maxWidth: '40%',
                    },
                }}>
            <DrawerContent />
        </Drawer>
    )
}
export default RightDrawer