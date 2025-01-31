import React from 'react';
    import { Container, Navbar, Carousel, Card, Row, Col, Button, ListGroup, Form } from 'react-bootstrap';
    import './App.css';
    import { FaFacebook, FaInstagram } from 'react-icons/fa';

    function App() {
      const [cart, setCart] = React.useState([]);
      const [specialInstructions, setSpecialInstructions] = React.useState('');

      const menuItems = [
        { id: 1, name: 'Margherita Pizza', price: 12.99 },
        { id: 2, name: 'BBQ Burger', price: 9.99 },
        { id: 3, name: 'Caesar Salad', price: 8.99 },
        { id: 4, name: 'Grilled Salmon', price: 18.99 },
        { id: 5, name: 'Vegetarian Pasta', price: 14.99 },
        { id: 6, name: 'New York Steak', price: 24.99 },
        { id: 7, name: 'Tiramisu', price: 7.99 },
        { id: 8, name: 'Cheesecake', price: 6.99 }
      ];

      const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
          setCart(cart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ));
        } else {
          setCart([...cart, { ...item, quantity: 1 }]);
        }
      };

      const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
      };

      const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
      };

      const handleOrderSubmit = (e) => {
        e.preventDefault();
        alert(`Order placed successfully!\nTotal: $${calculateTotal()}\nSpecial Instructions: ${specialInstructions}`);
        setCart([]);
        setSpecialInstructions('');
      };

      return (
        <>
          <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between">
            <Container className="d-flex justify-content-between align-items-center">
              <Navbar.Brand href="#home">Delicious Bites</Navbar.Brand>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaInstagram />
                </a>
              </div>
            </Container>
          </Navbar>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Pizza"
              />
              <Carousel.Caption>
                <h3>Artisan Pizzas</h3>
                <p>Hand-tossed with fresh ingredients</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
                alt="Burgers"
              />
              <Carousel.Caption>
                <h3>Gourmet Burgers</h3>
                <p>Juicy, flavorful, and made to order</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80"
                alt="Steak"
              />
              <Carousel.Caption>
                <h3>Steakhouse Specials</h3>
                <p>Premium cuts cooked to perfection</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Container className="my-5">
            <h2 className="text-center mb-4">Our Specialties</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                  <Card.Body>
                    <Card.Title>Gourmet Burgers</Card.Title>
                    <Card.Text>
                      Juicy, flavorful burgers made with premium ingredients
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                  <Card.Body>
                    <Card.Title>Artisan Pizzas</Card.Title>
                    <Card.Text>
                      Hand-tossed pizzas with fresh toppings
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                  <Card.Body>
                    <Card.Title>Seasonal Salads</Card.Title>
                    <Card.Text>
                      Fresh, locally-sourced ingredients
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="my-5">
            <h2 className="text-center mb-4">Order Online</h2>
            <Row>
              <Col md={8}>
                <h4>Menu</h4>
                <ListGroup>
                  {menuItems.map(item => (
                    <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                      </div>
                      <Button variant="primary" size="sm" onClick={() => addToCart(item)}>
                        Add to Cart
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col md={4}>
                <h4>Your Order</h4>
                {cart.length > 0 ? (
                  <>
                    <ListGroup>
                      {cart.map(item => (
                        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                          <div>
                            {item.name} x {item.quantity}
                            <br />
                            <small>${(item.price * item.quantity).toFixed(2)}</small>
                          </div>
                          <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                            Remove
                          </Button>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <div className="mt-3">
                      <strong>Total: ${calculateTotal()}</strong>
                    </div>
                    <Form onSubmit={handleOrderSubmit} className="mt-3">
                      <Form.Group controlId="specialInstructions" className="mb-3">
                        <Form.Label>Special Instructions</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={specialInstructions}
                          onChange={(e) => setSpecialInstructions(e.target.value)}
                          placeholder="Any special requests or dietary restrictions?"
                        />
                      </Form.Group>
                      <Button variant="success" type="submit" className="w-100">
                        Place Order
                      </Button>
                    </Form>
                  </>
                ) : (
                  <p>Your cart is empty. Add items from the menu to get started!</p>
                )}
              </Col>
            </Row>
          </Container>

          <footer className="bg-dark text-white text-center py-3">
            <Container>
              <p className="mb-0">© 2023 Delicious Bites. All rights reserved.</p>
            </Container>
          </footer>
        </>
      );
    }

    export default App;
