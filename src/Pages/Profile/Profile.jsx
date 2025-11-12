import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const Profile = () => {

    const {user} = useContext(AuthContext)

    console.log(user)
    return (
      <div className="max-w-sm mx-auto bg-white mt-10 shadow-lg rounded-xl overflow-hidden">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-24 h-24 rounded-full border-4 border-primary"
          src={user.photoURL
 || "https://i.ibb.co/6nT0JgG/default-avatar.png"}
          alt={user.name}
        />
        <h2 className="mt-4 text-xl font-bold">{user.displayName}</h2>
        <p className="text-gray-500">{user.email}</p>

        

        <Link to={'/'} className="btn btn-primary mt-6 w-full rounded-full">
          Home
        </Link>
      </div>
    </div>
    );
};

export default Profile;