import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-lg font-semibold text-gray-700">
          Please log in to view your profile.
        </h2>
        <Link to="/" className="btn btn-primary mt-4">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto bg-white mt-10 shadow-lg rounded-xl overflow-hidden">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-24 h-24 rounded-full border-4 border-primary"
          src={user.photoURL || "https://i.ibb.co/6nT0JgG/default-avatar.png"}
          alt={user.displayName || "User Avatar"}
        />
        <h2 className="mt-4 text-xl font-bold">{user.displayName}</h2>
        <p className="text-gray-500">{user.email}</p>

        <Link to="/" className="btn btn-primary mt-6 w-full rounded-full">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Profile;
