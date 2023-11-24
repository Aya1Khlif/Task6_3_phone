import React from "react";
import "./Card.css";
import Card from 'react-bootstrap/Card';
import mobile from '../../assets/img/customers.jpg'
export default function Cards() {
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then(console.log);

  return <>
<div className="cards container text-center d-flex  gap-5 " >
<Card style={{ width: '18rem' }} className="bg-light">
      <Card.Img variant="top" src={mobile} className="img" />
      <Card.Body>
        <Card.Title>SPECTRONIC XR
 
 </Card.Title>
        <Card.Text>
        935.05$
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="bg-light">
      <Card.Img variant="top" src={mobile} className="img" />
      <Card.Body>
        <Card.Title>SPECTRONIC XR
 
 </Card.Title>
        <Card.Text>
        935.05$
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="bg-light">
      <Card.Img variant="top" src={mobile} className="img" />
      <Card.Body>
        <Card.Title>SPECTRONIC XR
 
 </Card.Title>
        <Card.Text>
        935.05$
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="bg-light">
      <Card.Img variant="top" src={mobile} className="img" />
      <Card.Body>
        <Card.Title>SPECTRONIC XR
 
 </Card.Title>
        <Card.Text>
        935.05$
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </>;
}
