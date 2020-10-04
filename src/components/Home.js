import React, {useEffect} from 'react';

import {Jumbotron, Container, Button} from 'reactstrap';

function Home(){

    useEffect(() => {
        document.title="Home || SpringBoot";
    }, []);

    return (
        <div>
            <Jumbotron className="text-center">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p> Welcome to Home of Course Application</p>
            <Container>
                <Button outline color="primary">Start Learning Courses</Button>
            </Container>
            </Jumbotron>
              
        </div>
    );
}

export default Home;