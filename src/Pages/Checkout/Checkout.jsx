import { updateDocumentTitle } from "../../utility/utility";
import "./Checkout.css";

const Checkout = () => {
  // update page title
  updateDocumentTitle("Checkout");
  return <div className="Checkout-page">Checkout</div>;
};

export default Checkout;
