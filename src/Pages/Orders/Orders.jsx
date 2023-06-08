import { updateDocumentTitle } from "../../utility/utility";
import "./Orders.css";

const Orders = () => {
  // update page title
  updateDocumentTitle("Orders");
  return <div className="Orders-page">Orders</div>;
};

export default Orders;
