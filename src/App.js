import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Container, Row, Col} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from "./components/AllCourses";
import Header from './components/Header';
import AddCourse from './components/AddCourse';
import Menu from './components/Menu';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const notify = () => {
    toast.success("Dones");
  }

  return (
    <div>
      <Router>
      <ToastContainer />
      <Container>
        <Header></Header>
        <Row> 
          <Col md={4}>
           <Menu/>

          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/view-course" component={AllCourses} exact/>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
