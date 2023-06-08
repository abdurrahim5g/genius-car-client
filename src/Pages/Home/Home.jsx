import { updateDocumentTitle } from "../../utility/utility";
import "./Home.css";

const Home = () => {
  // update page title
  updateDocumentTitle("Home");
  return <div className="Home-page">Home</div>;
};

export default Home;
