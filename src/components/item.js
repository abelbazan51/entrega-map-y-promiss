import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ product }) => {
  const [value, setValue] = useState(product.id);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <div>
            {product.name}
            {value}
          </div>
          <div>
            <div>
              <div> {product.id}</div>
              {product.email}
            </div>
            {product.gender}
          </div>
        </Card.Text>
        <Button variant="primary" onClick={() => setValue(`$${value}`)}>
          Cambiar precio
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
