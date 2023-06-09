import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./HeroSlider.css";
import { Link, useLoaderData } from "react-router-dom";

const HeroSlider = () => {
  const services = useLoaderData();

  return (
    <div className="hero-slider">
      <AwesomeSlider>
        {services?.map((service) => (
          <div
            className="text-white car-container hero-slider-item px-10"
            key={service._id}
            style={{
              background: `url(${service.img}) no-repeat center /  cover`,
            }}
          >
            <div className="max-w-3xl">
              <h3 className="text-5xl font-bold mb-8">{service.title}</h3>
              <p className="text-lg mb-10">
                {service.description.slice(0, 200)} [...]
              </p>
              <Link className=" checkout-btn">Book Now</Link>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default HeroSlider;
