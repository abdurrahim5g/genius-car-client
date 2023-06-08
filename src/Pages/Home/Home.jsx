import { updateDocumentTitle } from "../../utility/utility";
import "./Home.css";

const Home = () => {
  // update page title
  updateDocumentTitle("Home");
  return <div className="Home-page">home</div>;
};

export default Home;
