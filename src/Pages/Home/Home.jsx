import { updateDocumentTitle } from "../../utility/utility";
import HeroSlider from "./HeroSlider/HeroSlider";
import "./Home.css";
import Service from "./Service/Service";

const Home = () => {
  // update page title
  updateDocumentTitle("Home");
  return (
    <div className="Home-page">
      <HeroSlider />
      <Service></Service>
    </div>
  );
};

export default Home;
