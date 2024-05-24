import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileDetailsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    email: "vasu0508@gmail.com",
    firstName: "Vasu",
    lastName: "Choudhary",
    phone: "9934578909"
  });
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log("Profile saved", formData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    console.log("Account deleted");
    setShowDeletePopup(false);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.clear();
  };

  return (
    <div className="flex flex-col w-full md:p-4 pt-4 pb-6 lg:text-xl text-sm">
      <div className="flex justify-end mt-4 mb-4">
        <Link to={"/"}>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Logout
          </button>
        </Link>
      </div>
      <div className="mt-8 md:p-6 p-2 col-span-2 lg:w-full w-full bg-white rounded-lg shadow-md">
        <div className="flex mb-4 w-full">
          <h2 className="font-bold">My Profile</h2>
        </div>
        <div className="mb-4 border p-2">
          <label className="text-gray-700 flex space-x-3" htmlFor="email">
            <p className="text-gray-900 font-bold">Email:</p>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-gray-900 font-medium"
              />
            ) : (
              <p className="text-gray-900 font-medium">{formData.email}</p>
            )}
          </label>
        </div>
        <div className="lg:flex grid-cols-2 gap-4">
          <div className="mb-4 border p-2 w-full">
            <label className="text-gray-700 flex space-x-3" htmlFor="firstName">
              <p className="text-gray-900 font-bold">First Name:</p>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="text-gray-900 font-medium"
                />
              ) : (
                <p className="text-gray-900 font-medium">{formData.firstName}</p>
              )}
            </label>
          </div>
          <div className="mb-4 border p-2 w-full">
            <label className="text-gray-700 flex space-x-3" htmlFor="lastName">
              <p className="text-gray-900 font-bold">Last Name:</p>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="text-gray-900 font-medium"
                />
              ) : (
                <p className="text-gray-900 font-medium">{formData.lastName}</p>
              )}
            </label>
          </div>
          <div className="mb-4 border p-2 w-full">
            <label className="text-gray-700 flex space-x-3" htmlFor="phone">
              <p className="text-gray-900 font-bold">Phone No:</p>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="text-gray-900 font-medium"
                />
              ) : (
                <p className="text-gray-900 font-medium">{formData.phone}</p>
              )}
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4 self-end">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mr-4"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mr-4"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Delete Account
        </button>
      </div>
      {showDeletePopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to delete your account?</p>
            <div className="flex space-x-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetailsPage;
