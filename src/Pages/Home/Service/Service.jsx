import { Link, useLoaderData } from "react-router-dom";
import "./Service.css";
import { FaAngleRight } from "react-icons/fa";

const Service = () => {
  const services = useLoaderData();
  return (
    <section className="service-section py-12 md:py-20">
      <div className="car-container">
        <div className="row max-w-3xl mx-auto text-center mb-12">
          <h6
            className="font-semibold"
            style={{ color: "var(--primary-color)" }}
          >
            Service
          </h6>
          <h3 className="text-6xl font-semibold">Our Services Area</h3>
          <p className="mt-5 text-lg">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <div
              className="card w-full bg-base-100 shadow-xl"
              key={service._id}
            >
              <figure style={{ height: "220px" }}>
                <img src={service.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description.slice(0, 100)}...</p>
                <div
                  className="card-actions justify-between font-semibold mt-6"
                  style={{ color: "var(--primary-color)" }}
                >
                  <span className="price">Price: ${service.price}</span>
                  <span className="checkout">
                    <Link to={``} className="text-xl">
                      <FaAngleRight />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
