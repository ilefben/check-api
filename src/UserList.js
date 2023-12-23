import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUser(response.data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };

    fetchUser();
  }, []);
  return (
    <div>
      <h1>user list</h1>

      {user.map((user) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.id}</Card.Text>
            <Card.Text>{user.address.street}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default UserList;
