import React, {useEffect, useState} from "react";
import {Form, Input, Button, FormGroup} from "reactstrap";
import Container from "reactstrap/lib/Container";
import axios from 'axios';
import base_url from "./../api/bootapi"

function AddCourse()
{
    useEffect(() => {
        document.title="Add Course";
    }, []);

    const [course, setCourse]= useState({});

    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    const postDatatoServer=(data)=>{

        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },
            (error)=>{
                console.log(error);
                console.log("error");
            }
        )

    }
    return (
        <div>
            <h1 className="text-center">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="user_id">Course ID</label>
                    <Input type="text" placeholder="Enter ID" name="user_id" 
                    id="user_id"
                    onChange={(e)=>{
                        setCourse({...course, id:e.target.value})
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="title">Title</label>
                    <Input type="text" placeholder="Enter Title" name="title" 
                    id="title"
                    onChange={(e)=>{
                        setCourse({...course, title:e.target.value})
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">Description</label>
                    <Input type="textarea" placeholder="Enter description" name="description"
                    id="description"
                    onChange={(e)=>{
                        setCourse({...course, description:e.target.value})
                    }}
                    style={{height : 150}}/>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color = "success">Add Course</Button>
                    <Button type="reset" color = "warning ml-2" onClick={()=>{
                        setCourse({});
                    }}>Clear</Button>
                </Container>
            </Form>
        </div>
    );
}

export default AddCourse;