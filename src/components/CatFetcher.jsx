import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import getCat from '../api';
import CatImage from './CatImage';

export default function CatFetcher() {
  const [cat, setCat] = useState(null);

  const handleYes = () => {
    getCat().then((data) => {
      setCat(data);
    });
  };
  const handleNo = () => {
    setCat(null);
  };
  return (
    <section>
      <Card className="mb-3" style={{ maxWidth: '400px', margin: 'auto' }}>
        <Card.Body>
          <Card.Title>Would you like to see a cat?</Card.Title>
        </Card.Body>
        <Button onClick={handleYes}>Yes</Button>
        <Button onClick={handleNo}>No</Button>
      </Card>

      {cat ? <CatImage cat={cat} /> : <p>No cat to display</p>}
    </section>
  );
}
