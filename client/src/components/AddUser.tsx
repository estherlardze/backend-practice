import { useState } from "react";

export const AddUser = ({
  setShowForm,
}: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("New User Data:", formData);

    setFormData({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <main className="bg-black/80 min-h-screen flex items-center justify-center fixed left-0 top-0 w-full">
      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Add New User</h2>
          <button
            onClick={() => setShowForm(false)}
            className="text-xl font-bold cursor-pointer"
          >
            x
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Enter age"
              required
            />
          </div>
          <button
            type="submit"
            onClick={() => setShowForm(false)}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Add User
          </button>
        </form>
      </div>
    </main>
  );
};
