import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [collegeName, setCollegeName] = useState("");
  const [collegeAddress, setCollegeAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hobby, setHobby] = useState("");
  const [bio, setBio] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 p-8 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-12 rounded-3xl shadow-2xl transition-transform transform hover:scale-105">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
          Update Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-44 h-44 rounded-full object-cover mb-6 shadow-xl border-4 border-indigo-500"
              />
            ) : (
              <div className="w-44 h-44 rounded-full bg-gray-300 mb-6 shadow-inner"></div>
            )}
            <label className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Form Fields */}
          {[
            {
              id: "name",
              label: "Name",
              value: name,
              setValue: setName,
              placeholder: "Enter your name",
            },
            {
              id: "email",
              label: "Email",
              value: email,
              setValue: setEmail,
              placeholder: "Enter your email",
              type: "email",
            },
            {
              id: "phone",
              label: "Phone Number",
              value: phoneNumber,
              setValue: setPhoneNumber,
              placeholder: "Enter your phone number",
              type: "tel",
            },
            {
              id: "collegeName",
              label: "College/School's Name",
              value: collegeName,
              setValue: setCollegeName,
              placeholder: "Enter institution name",
            },
            {
              id: "collegeAddress",
              label: "College/School's Address",
              value: collegeAddress,
              setValue: setCollegeAddress,
              placeholder: "Enter address",
            },
            {
              id: "hobby",
              label: "Hobby",
              value: hobby,
              setValue: setHobby,
              placeholder: "Enter your hobby",
            },
            {
              id: "bio",
              label: "Bio",
              value: bio,
              setValue: setBio,
              placeholder: "Tell us about yourself",
            },
          ].map((field) => (
            <div key={field.id} className="relative">
              <label
                className="block mb-3 font-semibold text-gray-700"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type || "text"}
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                placeholder={field.placeholder}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all shadow-sm"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white text-xl font-bold rounded-xl shadow-xl transition-transform transform hover:scale-105"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
