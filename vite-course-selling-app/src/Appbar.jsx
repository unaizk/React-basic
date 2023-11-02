import React from 'react'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography';

const Appbar = () => {
  return (
    <div style={{display : 'flex',justifyContent : 'space-between'}}>
        <div>
           <Typography variant='h5' style={{marginLeft : '10px', marginTop : '10px'}}>
                Coursera
            </Typography> 
        </div>
        <div style={{display : 'flex'}}>
            <div style={{marginRight : '10px', marginTop : '10px'}}>
                <Button variant='contained' onClick={()=>{window.location = '/signin'}}>
                    Sign in
                </Button>
            </div>
            <div  style={{marginRight : '10px', marginTop : '10px'}}>
                <Button variant='contained' onClick={()=>{window.location = '/signup'}}>
                    Sign up
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Appbar