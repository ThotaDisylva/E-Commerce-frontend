import { Grid } from '@mui/material'
import React from 'react'
import Achivement from '../../components/Dashboard/Achivement'
import Monthlyoverview from '../../components/Dashboard/Monthlyoverview'
import { OrdersinDashboard } from '../../components/Dashboard/OrdersinDashboard'
import { Productsindashboard } from '../../components/Dashboard/Productsindashboard'

export const Dashboard = () => {
  return (
    <div className='bg-white'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <div className='shadow-lg shadow-gray-400' sx={{ boxShadow: 3, height: '100px' }}>
            <Achivement/>
            </div>
          </Grid>
          <Grid item xs={12} md={8} pr={2} >
          <div className='shadow-lg shadow-gray-400' sx={{ boxShadow: 3, height: '200px' }}>
            <Monthlyoverview/>
            </div>
          </Grid>
          </Grid>
          <br /><br />

          <Grid container spacing={2} >
          <Grid item xs={12} md={4} sx={{height:'200px'}}>
            <div className='shadow-lg shadow-gray-400' >
            <OrdersinDashboard/>
            </div>
          </Grid>
          <Grid item xs={12} md={8} pr={2} sx={{height:'200px'}}>
          <div className='shadow-lg shadow-gray-400'>
            <Productsindashboard/>
            </div>
          </Grid>
          </Grid>

    </div>
  )
}
