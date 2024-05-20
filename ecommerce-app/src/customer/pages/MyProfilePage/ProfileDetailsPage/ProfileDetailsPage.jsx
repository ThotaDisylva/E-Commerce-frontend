import React from "react";

const ProfileDetailsPage = () => {
  return (
    <div className="flex w-full md:p-4 pt-4 pb-6 space-x-3 lg:text-xl text-sm">
    <div className=" mt-8 md:p-6 p-2 col-span-2 lg:w-full w-full bg-white rounded-lg shadow-md">
      <div className="flex mb-4 w-full">
        <h2 className="font-bold">My Profile</h2>
      </div>
      <div className="mb-4 border p-2">
        <label className="text-gray-700 flex space-x-3" htmlFor="email">
          <p className="text-gray-900 font-bold">Email:</p>
          <p className="text-gray-900 font-medium">vasu0508@gmail.com</p>
        </label>
      </div>
      <div className="lg:flex grid-cols-2 gap-4">
        <div className="mb-4 border p-2 w-full">
          <label className="text-gray-700 flex space-x-3" htmlFor="firstName">
            <p className="text-gray-900 font-bold">First Name:</p>
            <p className="text-gray-900 font-medium">Vasu</p>
          </label>
        </div>
        <div className="mb-4 border p-2 w-full">
          <label className="text-gray-700 flex space-x-3" htmlFor="lastName">
            <p className="text-gray-900 font-bold">Last Name:</p>
            <p className="text-gray-900 font-medium">Choudhary</p>
          </label>
        </div>
      </div>      
    </div>
    </div>
  );
};
export default ProfileDetailsPage;
