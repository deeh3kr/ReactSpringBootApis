import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ListGroup from "reactstrap/lib/ListGroup";
import ListGroupItem from "reactstrap/lib/ListGroupItem";

function Menu()
{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag='a' to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/view-course" action>ViewCourse</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/add-course" action>AddCourse</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="#" action>About</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="#" action>Contacts</Link>
        </ListGroup>
    );
}

export default Menu;