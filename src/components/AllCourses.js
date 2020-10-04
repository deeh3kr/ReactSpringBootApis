import React, { useState, useEffect  } from "react";
import Course from "./Course"
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


function AllCourses()
{

    useEffect(() => {
        document.title="All Courses";
        getAllCoursesFromServer();
    }, []);


    //function to fetch course from server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response);
                console.log(response.data);
                toast.success("Courses has been loaded", {position: "bottom-center"});
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    const [courses, setCourses]=useState([
        // {title: "Django", description:"Description"},
        // {title: "Java", description: "Desc java"}
    ])

    const deleteCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id != id));
    }


    return(
        <div>
            <h1>All Courses</h1>
            <p>Course List</p>
            {
                courses.length>0 ? courses.map((course) => <Course key={course.id} course = {course} update={deleteCourse} />
                ):"No Courses Available"
            }
        </div>
    );
}

export default AllCourses;