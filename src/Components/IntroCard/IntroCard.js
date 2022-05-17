import { Card } from "react-bootstrap";
import styles from "./IntroCard.module.css";
const IntroCard = () => {
  return (
    <section className={styles.CardSection}>
      <Card className={styles.Card}>
        <Card.Body>
          <Card.Title className="fw-bold fs-3 ">
            Delicious Food, Delivered To You
          </Card.Title>
          <Card.Text>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </Card.Text>
          <Card.Text>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};
export default IntroCard;
