import { useState, useContext, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import CartItemsContext from "../../Context/CartItemsContext";
import CartButton from "./CartButton";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import styles from "./Cart.module.css";
const Cart = () => {
  const CartCntxt = useContext(CartItemsContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <CartButton setHandleShow={handleShow}></CartButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={`${styles.ModalHeader}`} closeButton>
          <Modal.Title className="fs-6 ">Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-0">
          {CartCntxt.CartItems.map((C_Item) => (
            <CartItem key={Math.random()} C_Item={C_Item} />
          ))}
          <CartTotal></CartTotal>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={`rounded-pill ${styles.CartCloseBtn}`}
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className={`rounded-pill ${styles.CartOrderBtn}`}
            variant="primary"
            onClick={handleClose}
          >
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default Cart;
