import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const changeQuantityOfCartItemHandler = async (cartItem, qty) => {
    dispatch(addToCart({ ...cartItem, qty }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go To Home</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((cartItem) => (
              <ListGroup.Item key={cartItem._id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${cartItem._id}`}>{cartItem.name}</Link>
                  </Col>
                  <Col md={2}>${cartItem.price}</Col>
                  <Col md={2}>
                    {" "}
                    <Form.Control
                      as="select"
                      value={cartItem.qty}
                      onChange={(e) =>
                        changeQuantityOfCartItemHandler(
                          cartItem,
                          Number(e.target.value)
                        )
                      }
                    >
                      {[...Array(cartItem?.countInStock).keys()].map(
                        (indexOfItemProductQuantity) => (
                          <option
                            key={indexOfItemProductQuantity + 1}
                            value={indexOfItemProductQuantity + 1}
                          >
                            {indexOfItemProductQuantity + 1}
                          </option>
                        )
                      )}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(cartItem._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems.reduce((acc, cartItem) => acc + cartItem.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce(
                  (acc, cartItem) => acc + cartItem.qty * cartItem.price,
                  0
                )
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
