import { useRef, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Item.module.css";
import CartItemsContext from "../Context/CartItemsContext";
const Item = (props) => {
  const numberInput = useRef();
  const CartCntxt = useContext(CartItemsContext);

  //functions:
  const AddButtonHandler = () => {
    CartCntxt.addItem({
      name: props.item.name,
      price: props.item.price,
      quantity: +numberInput.current.value,
    });
    numberInput.current.value = "";
  };
  return (
    <Container className={styles.CartItem}>
      <Row>
        <Col className={`text-start fw-bold`}>{props.item.name}</Col>
        <Col className="text-end fw-bold">
          Amount
          <input
            ref={numberInput}
            className={styles.input}
            type="number"
            min="1"
            max="10"
          ></input>
        </Col>
      </Row>
      <Row>
        <Col className={`text-start ${styles.CartItemDetail}`}>
          {props.item.detail}
        </Col>
        <Col className="text-end">
          <Button
            onClick={AddButtonHandler}
            className="rounded-pill px-4 py-0 mt-1"
          >
            + Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className={`text-start fw-bold ${styles.CartItemPrice}`}>
          {`$${props.item.price}`}
        </Col>
      </Row>
      <hr></hr>
    </Container>
  );
};
export default Item;
