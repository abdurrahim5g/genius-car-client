import { updateDocumentTitle } from "../../utility/utility";
import "./Login.css";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
// import linkedin from "../../assets/icons/linkedin.png";
import google from "../../assets/icons/google.png";
import { useAuthContex } from "../../Contex/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  // update page title
  updateDocumentTitle("Login");

  const { loginWithProvider } = useAuthContex();

  // providers
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  // provider Login  Handler
  const providerLoginHandler = (provider) => {
    loginWithProvider(provider)
      .then((result) => console.log(result.user))
      .then((err) => console.log(err.code));
  };

  return (
    <div className="Login-page py-24">
      <div className="car-container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-content-center">
          <div className="image-column">
            <img src={login} alt="Login Image" />
          </div>

          <div className="form-column">
            <div className="border rounded-lg py-10 px-7">
              <h3 className="text-3xl text-center font-bold">Login</h3>

              <form>
                <div className="single-form-item">
                  <label htmlFor="email" className="block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="single-form-item">
                  <label htmlFor="password" className="block">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                  />
                </div>

                <div className="single-form-item">
                  <button>Login</button>
                </div>
              </form>

              <div className="divider my-8 w-3/4  mx-auto">Or Sign In with</div>

              <div className="provider-logins  flex justify-center gap-3">
                <button onClick={() => providerLoginHandler(facebookProvider)}>
                  <img src={facebook} alt="Facebook" />
                </button>
                {/* <button onClick={() => providerLoginHandler(linkedinProvider)}>
                  <img src={linkedin} alt="Linkedin" />
                </button> */}
                <button onClick={() => providerLoginHandler(googleProvider)}>
                  <img src={google} alt="Google" />
                </button>
              </div>

              <div className="notice text-center">
                <p>
                  Do not have any account{" "}
                  <Link
                    to={"/signup"}
                    style={{ color: "var(--primary-color" }}
                    className="font-semibold"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
