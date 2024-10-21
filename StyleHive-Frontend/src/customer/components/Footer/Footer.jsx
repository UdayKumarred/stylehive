import { Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white mt-10 text-center' container  sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" >
          Company
        </Typography>
        <div>
          <button className='pb-5' variant='h6' gutterBottom>About</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Blog</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Press</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Jobs</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Partners</button>
        </div>
        
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" >
          Solutions
        </Typography>
        <div>
          <button className='pb-5' variant='h6' gutterBottom>Marketing</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Analytics</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Commerce</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Insights</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Support</button>
        </div>
        
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" >
          Documentation
        </Typography>
        <div>
          <button className='pb-5' variant='h6' gutterBottom>Guides</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>API Status</button>
        </div>
        
        
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" >
          Legal
        </Typography>
        <div>
          <button className='pb-5' variant='h6' gutterBottom>Claim</button>
        </div>
        <div>
          <button className='pb-5' variant='h6'gutterBottom>Privacy</button>
        </div>
        
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 Pace University. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made by Team 3.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>


      
      </Grid>
    </div>
  )
}

export default Footer