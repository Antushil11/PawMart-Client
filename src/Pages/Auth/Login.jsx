import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  

  const handleLogIn = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  signInUser(email, password)
    .then((result) => {
      console.log(result.user);
      toast.success("Login successful!");
      event.target.reset();
      navigate(location.state || "/");
    })
    .catch((error) => {
      console.log(error);
      // Firebase error codes friendly messages
      if (error.code === "auth/invalid-credential") {
        toast.error("Invalid email or password!");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Try again.");
      } else {
        toast.error(error.message);
      }
    });
};


  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100  mt-40 mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body bg-[#F8F1E8]">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
   
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
               className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-full bg-primary">
              Login
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="text-center">
          “Don’t have an account? <Link
            className="text-blue-500 hover:text-blue-800"
            to="/auth/register"
          >
             Register ”
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;