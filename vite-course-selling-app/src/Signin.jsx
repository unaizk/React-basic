import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Signin = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    console.log(username);
    console.log(password);

    const handleSignin = ()=>{

    }
  return (
    <div>
        
            <div style={{paddingTop : '150px', marginBottom : '10px', display : 'flex', justifyContent : 'center'}}>
                <Typography variant="h5">
                    Welcome to Coursera. Sign in below
                </Typography>
            </div>
            
       
        
        <div style={{display : 'flex', justifyContent : 'center'}}>
        <Card variant='outlined' style={{width : '400px', padding : '20px'}}>
      
            <TextField value={username} onChange={(e)=>{setUsername(e.target.value)}} fullWidth={true} id="outlined-basic" label="Username" type='text' variant="outlined" />   
            <br />
            <br />
            <TextField value={password} onChange={(e)=>{setPassword(e.target.value)}} fullWidth={true} id="outlined-basics" label="Password" type='password' variant="outlined" />
            <br />
            <br />
            <div style={{display : 'flex', justifyContent : 'center'}}>
            <Button size='large' onSubmit={handleSignin} variant="contained" >Sign in</Button>
            </div>
           
      
        </Card>
        </div>
        
    </div>
  )
}

export default Signin