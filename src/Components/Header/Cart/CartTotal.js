import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartItemsContext from "../../Context/CartItemsContext";

const CartTotal = () => {
  const CartCntxt = useContext(CartItemsContext);
  return (
    <Container>
      <Row>
        <Col className="text-start fw-bold fs-5 ">Total Amount</Col>
        <Col className="text-end fw-bold fs-5">{`$${CartCntxt.Total}`}</Col>
      </Row>
    </Container>
  );
};
export default CartTotal;
