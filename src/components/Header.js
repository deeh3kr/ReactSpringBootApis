import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';

function Header({name, title}){
    return (
        <div>
            <Card className="my 2 bg-warning">
                <CardBody>
                <h1 className="text-center my-2">Welcome to Course Application</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;