import { updateDocumentTitle } from "../../utility/utility";
import "./Error.css";

const Error = () => {
  // update page title
  updateDocumentTitle("Error");
  return <div className="Error-page">Error</div>;
};

export default Error;
