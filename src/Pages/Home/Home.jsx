import { updateDocumentTitle } from "../../utility/utility";
import HeroSlider from "./HeroSlider/HeroSlider";
import "./Home.css";

const Home = () => {
  // update page title
  updateDocumentTitle("Home");
  return (
    <div className="Home-page">
      <HeroSlider />
    </div>
  );
};

export default Home;
