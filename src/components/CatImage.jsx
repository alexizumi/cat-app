import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';

const CatImage = (props) => {
  const cat = props.cat;
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImage = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}`
        );
        const data = await response.json();
        if (data && data[0]?.url) {
          setImageUrl(data[0].url);
        }
      } catch (error) {
        console.error('Error fetching cat image:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCatImage();
  }, [cat.id]);

  return (
    <section>
      <Card className="mb-3" style={{ maxWidth: '400px', margin: 'auto' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <Spinner animation="border" variant="primary" />
            <p>Loading image...</p>
          </div>
        ) : (
          <Card.Img variant="top" src={imageUrl} alt={`Image of ${cat.name}`} />
        )}
        <Card.Body>
          <Card.Title>Cat of the Day!</Card.Title>
          <Card.Subtitle>Breed</Card.Subtitle>
          <Card.Text>{cat.name}</Card.Text>
          <Card.Subtitle>Origin</Card.Subtitle>
          <Card.Text>{cat.origin}</Card.Text>
          <Card.Subtitle>Description:</Card.Subtitle>
          <Card.Text>{cat.description}</Card.Text>
          <Card.Subtitle>Learn More:</Card.Subtitle>
          <Card.Text>
            <a
              href={cat.wikipedia_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#007bff' }}
            >
              Wikipedia: {cat.name}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};
export default CatImage;
