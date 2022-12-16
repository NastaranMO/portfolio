import React from 'react'
import './BaseLayout.module.scss'
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from '@mui/material'

const BaseLayout = () => {
    return (
        <Box className='dark'>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                justifyContent={'space-between'}>
                <Grid item>
                    <Navbar />
                </Grid>
                <Grid item flexGrow={1}>
                    <Routes>
                        {/* <Route exact path={'/'} element={<Home />} />
                        <Route exact path={'/about'} element={<About />} />
                        <Route exact path={'/portfolio'} element={<Portfolio />} /> */}
                    </Routes>
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                        py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                        <p>Created with &hearts; by Nastaran Moghadasi</p>
                        <p>&copy; 2022</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BaseLayout