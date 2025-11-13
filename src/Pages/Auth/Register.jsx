import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
   const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);


  const navigate = useNavigate();


 const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // ✅ Password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !hasMinLength) {
      toast.error(
        "Password must contain at least 1 uppercase, 1 lowercase, and be 6+ characters."
      );
      return;
    }

    toast.loading( { id: "create-user" });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);

        let message = "Registration failed!";
        switch (error.code) {
          case "auth/email-already-in-use":
            message = "This email is already registered!";
            break;
          case "auth/invalid-email":
            message = "Invalid email address!";
            break;
          case "auth/weak-password":
            message = "Password is too weak!";
            break;
          default:
            message = error.message;
        }

        toast.error(message, { id: "create-user" });
      });
  };


  const handleGoogleSignIn = () => {
    toast.loading( { id: "create-user" });
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully!", { id: "create-user" });
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
    <div className="card bg-base-100 mt-40  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body bg-[#F8F1E8]">
        <h1 className="text-3xl font-bold text-center">Register Now!</h1>
         <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* email field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
              required
            />

            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Photo URL"
              required
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />
            {/* password field */}
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
              Register
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
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/auth/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;