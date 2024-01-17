import React from 'react'
import { Box, Typography } from '@mui/material'
import { format } from 'date-fns'

const DateTitle = ({ timestamp }: { timestamp: number }) => {
    return (
        <Box textAlign={'left'}>
            <Typography fontSize={24}>{format(timestamp, 'yyyy-MM-dd')}</Typography>
        </Box>
    )
}
export default DateTitle