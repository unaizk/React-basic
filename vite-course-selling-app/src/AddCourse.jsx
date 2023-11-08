import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const AddCourse = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [image, setImage] = useState('')
  return (
    <div>
         <div style={{paddingTop : '150px', marginBottom : '10px', display : 'flex', justifyContent : 'center'}}>
                <Typography variant="h5">
                   Add course
                </Typography>
            </div>

            
        <div style={{display : 'flex', justifyContent : 'center'}}>
        <Card variant='outlined' style={{width : '400px', padding : '20px'}}>
      
            <TextField value={title} onChange={(e)=>{setTitle(e.target.value)}} fullWidth={true} id="outlined-basic" label="Title" type='text' variant="outlined" />   
            <br />
            <br />
            <TextField value={description} onChange={(e)=>{setDescription(e.target.value)}} fullWidth={true} id="outlined-basics" label="Description" type='text' variant="outlined" />
            <br />
            <br />
            <TextField value={image} onChange={(e)=>{setImage(e.target.value)}} fullWidth={true} id="outlined-basic" label="Image link" type='text' variant="outlined" /> 
            <br />
            <br />
            <div style={{display : 'flex', justifyContent : 'center'}}> 
            <Button size='large' onClick={()=>{
                fetch('http://localhost:3000/admin/courses',{
                    method : 'POST',
                    body : JSON.stringify({
                        title : title,
                        description : description,
                        imageLink : image,
                        published : true
                       
                    }),
                    headers : {
                        "Content-type" : "application/json",
                        "Authorization" : "Bearer " + localStorage.getItem("token")
                    }
                }).then((res)=>{
                    res.json().then((data)=>{
                       alert('Course added')
                    })
                })
            }} variant="contained" >Add Course</Button>
            </div>
           
      
        </Card>
        </div>
    </div>
  )
}

export default AddCourse