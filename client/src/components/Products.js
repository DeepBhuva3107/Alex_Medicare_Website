import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/styles.css"; 
import categories from "../data/CategoriesData";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <Container className="my-4 products-container">
      {selectedCategory === null ? (
        <Row className="justify-content-center">
          {categories.map((category) => (
            <Col key={category.id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="category-card h-100 text-center">
                <Card.Body>
                  <Card.Title className="category-title">{category.name}</Card.Title>
                  <Button
                    variant="primary"
                    className="view-products-btn"
                    onClick={() => setSelectedCategory(category)}
                  >
                    View Products
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <>
          <Button
            variant="outline-secondary"
            onClick={() => setSelectedCategory(null)}
            className="mb-4 back-btn"
            onMouseEnter={() => setIsHovered(true)}  
            onMouseLeave={() => setIsHovered(false)} 
          >
            {isHovered ? "← Back to Categories" : selectedCategory.name} 
          </Button>
          <Row className="justify-content-center">
            {selectedCategory.products.map((product) => (
              <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
                <Card className="product-card h-100">
                  <div className="product-img-container">
                    <Card.Img
                      variant="top"
                      src={`/assets/images/${product.image}`}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="product-title">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="product-description">
                      {product.description}
                    </Card.Text>
                    <Button variant="success" className="mt-2 learn-more-btn">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default Products;
