import { Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Course = () => {
    const [course,setCourse] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses',{
            method : 'GET',
            headers : {
                "Content-type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then((res)=>{
            res.json().then((data)=>{
                setCourse(data.courses)
                console.log(data,'data');
                console.log(data.courses,'dta.courses');
                console.log(course,'coruse');
            })
        })
    },[])
  return (
    <div>
        {course.map((cor)=>{
        return <Card style={{
                width : '300px',
                margin : '10px',
                minHeight : '200px'
            }}>
            <Typography textAlign={'center'} variant='h4'>
                        {cor.title}
            </Typography>
            <Typography textAlign={'center'} variant='subtitle1'>
                        {cor.description}
            </Typography>    
        </Card>
        })}
    </div>
   
  )
}

export default Course