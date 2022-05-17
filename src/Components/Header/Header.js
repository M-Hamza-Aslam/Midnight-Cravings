import Cart from "./Cart/Cart";
import styles from "./Header.module.css";
import MealImage from "../../Icon/meals.png";

const Header = () => {
  return (
    <>
      <div className={`container-fluid ${styles.header}`}>
        <header className="d-flex flex-wrap justify-content-center py-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none"
          >
            <span className="fs-4">Midnight Cravings</span>
          </a>
          <Cart></Cart>
        </header>
      </div>
      <div className={styles["main-image"]}>
        <img src={MealImage} alt="meals"></img>
      </div>
    </>
  );
};
export default Header;
