import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Appbar = () => {
    const navigate = useNavigate()
    const [userName,setUserName] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3000/admin/me',{
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            resp.json().then((data)=>{
                if(data.username){
                    setUserName(data.username)
                }
            })
        })
    }, [])
    if(userName){
        return (
            <div style={{display : 'flex',justifyContent : 'space-between'}}>
                <div>
                   <Typography variant='h5' style={{marginLeft : '10px', marginTop : '10px'}}>
                        Coursera
                    </Typography> 
                </div>
                <div style={{display : 'flex'}}>
                    <div style={{marginRight : '10px', marginTop : '10px'}}>
                        {userName}
                    </div>
                    <div  style={{marginRight : '10px', marginTop : '10px'}}>
                        <Button variant='contained' onClick={()=>{
                            localStorage.setItem('token', null);
                            window.location = '/signup'
                    }}>
                           Logout
                        </Button>
                    </div>
                </div>
            </div>
          )
    }
  return (
    <div style={{display : 'flex',justifyContent : 'space-between'}}>
        <div>
           <Typography variant='h5' style={{marginLeft : '10px', marginTop : '10px'}}>
                Coursera
            </Typography> 
        </div>
        <div style={{display : 'flex'}}>
            <div style={{marginRight : '10px', marginTop : '10px'}}>
                <Button variant='contained' onClick={()=>{navigate('/signin')}}>
                    Sign in
                </Button>
            </div>
            <div  style={{marginRight : '10px', marginTop : '10px'}}>
                <Button variant='contained' onClick={()=>{navigate('/signup')}}>
                    Sign up
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Appbar