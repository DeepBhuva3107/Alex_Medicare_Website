import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/styles.css"; 
import categories from "../data/CategoriesData";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Container className="my-4 products-container">
      {selectedCategory === null ? (
        <Row>
          {categories.map((category) => (
            <Col key={category.id} md={4} className="mb-4">
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
            variant="secondary"
            onClick={() => setSelectedCategory(null)}
            className="mb-4 back-btn"
          >
            Back to Categories
          </Button>
          <Row>
            {selectedCategory.products.map((product) => (
              <Col key={product.id} md={4} className="mb-4">
                <Card className="product-card h-100">
                  <Card.Img
                    variant="top"
                    src={`/assets/images/${product.image}`}
                    alt={product.name}
                    className="product-image"
                  />
                  <Card.Body>
                    <Card.Title className="product-title">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="product-description">
                      {product.description}
                    </Card.Text>
                    {/* Additional CTA buttons */}
                    <Button variant="success" className="mt-2">
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
