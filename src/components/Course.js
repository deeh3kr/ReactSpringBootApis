import React from "react";
import {
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container
} from "reactstrap";
import axios from 'axios';
import base_url from './../api/bootapi';


function Course({course, update})
{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                console.log("Success: " + response);
                update(id);
            },
            (error)=>{
                console.log("error" + error);
            }
        )
    }

    return(
        <Card className="text-center">
        <CardBody>
            <CardSubtitle className="font-weight-bold">
                {course.title}
            </CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                <Button color="warning ml-3">Update</Button>
            </Container>
        </CardBody>
    </Card>
    );
}

export default Course;