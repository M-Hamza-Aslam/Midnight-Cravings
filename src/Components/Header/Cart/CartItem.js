import { Button, Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import CartItemsContext from "../../Context/CartItemsContext";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const CartCntxt = useContext(CartItemsContext);

  const AddButtonHandler = () => {
    CartCntxt.addItem({
      name: props.C_Item.name,
      price: props.C_Item.price,
      quantity: 1,
    });
  };
  const SubtractButtonHandler = () => {
    CartCntxt.removeItem({
      name: props.C_Item.name,
      price: props.C_Item.price,
      quantity: 1,
    });
  };

  return (
    <Container key={Math.random()}>
      <Row>
        <Col xs={8}>
          <p className="fw-bold mb-1 fs-5">{props.C_Item.name}</p>
          <p
            className={`d-inline-block me-3 fw-bold ${styles.CartItemPrice}`}
          >{`$${props.C_Item.price}`}</p>
          <p
            className={`d-inline-block fw-bold ms-3 border rounded px-2 ${styles.CartItemQuantity}`}
          >
            {`x ${props.C_Item.quantity}`}
          </p>
        </Col>
        <Col xs={4} className={styles.ButtonCol}>
          <Button
            className={`me-1 ${styles.Button}`}
            onClick={AddButtonHandler}
          >
            +
          </Button>
          <Button
            className={`me-1  ${styles.Button} ${styles.SubtractButton}`}
            onClick={SubtractButtonHandler}
          >
            -
          </Button>
        </Col>
      </Row>
      <hr className={styles.hrline}></hr>
    </Container>
  );
};
export default CartItem;
