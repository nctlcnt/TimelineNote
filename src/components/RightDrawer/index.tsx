import React from 'react'
import { Drawer } from '@mui/material'
import DrawerContent from '@components/RightDrawer/DrawerContent'
import GlobalContext from '@globalContext/GlobalContext'

const RightDrawer = () => {
    const { rightDrawerOpen: open, setRightDrawerOpen } = React.useContext(GlobalContext)
    console.log(open)
    return (
        <Drawer anchor={'right'} open={open} onClose={()=>setRightDrawerOpen(false)}>
            <DrawerContent />
        </Drawer>
    )
}
export default RightDrawer