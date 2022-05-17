import { useState, useContext, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import CartItemsContext from "../../Context/CartItemsContext";
import CartButton from "./CartButton";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import CartForm from "./CartForm";
import styles from "./Cart.module.css";
const Cart = () => {
  const CartCntxt = useContext(CartItemsContext);

  const [show, setShow] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isorderprocessing, setIsOrderProcessing] = useState(false);
  const [isOrderSeccessful, setIsOrderSuccessful] = useState(false);

  const handleClose = () => {
    setShow(false);
    setIsOrderSuccessful(false);
  };
  const handleShow = () => setShow(true);
  const OrderBtnHandler = () => {
    if (CartCntxt.isCartEmpty) {
      return;
    }
    setIsCheckout(true);
  };
  const CheckoutHandler = (userData) => {
    setIsCheckout(false);
    setIsOrderProcessing(true);
    const orderData = {
      ...userData,
      items: CartCntxt.CartItems,
      total: CartCntxt.Total,
    };
    const sendUserData = async () => {
      const response = await fetch(
        "https://react-http-7bff7-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(orderData),
          header: { "Content-Type": "application/json" },
        }
      );
      setIsOrderProcessing(false);
      if (response.ok) {
        setIsOrderSuccessful(true);
        CartCntxt.clearCart();
      }
    };
    sendUserData();
  };
  const formActions = (
    <div>
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
        onClick={OrderBtnHandler}
      >
        Order
      </Button>
    </div>
  );
  const CartEmptyMsg = (
    <p className="text-danger text-center">Please Add some Items!</p>
  );
  const processingMsg = (
    <p className="text-center text-warning">
      Processing your order, please wait!
    </p>
  );
  const successMsg = (
    <Fragment>
      <p className="text-center text-success">
        Successful, we have got your order!
      </p>
      <div className="text-end">
        <Button
          className={`rounded-pill me-2 ${styles.CartCloseBtn}`}
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
      </div>
    </Fragment>
  );
  const selectedCartItems = (
    <Fragment>
      {CartCntxt.CartItems.map((C_Item) => (
        <CartItem key={Math.random()} C_Item={C_Item} />
      ))}
      <CartTotal></CartTotal>
      <Modal.Footer>{!isCheckout && formActions}</Modal.Footer>
    </Fragment>
  );
  return (
    <Fragment>
      <CartButton setHandleShow={handleShow}></CartButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={`${styles.ModalHeader}`} closeButton>
          <Modal.Title className="fs-6 ">Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-0">
          {CartCntxt.isCartEmpty && !isOrderSeccessful && CartEmptyMsg}
          {!isorderprocessing && !isOrderSeccessful && selectedCartItems}
          {isorderprocessing && processingMsg}
          {isOrderSeccessful && successMsg}
        </Modal.Body>
        {isCheckout && (
          <CartForm onClose={handleClose} onCheckout={CheckoutHandler} />
        )}
      </Modal>
    </Fragment>
  );
};
export default Cart;
