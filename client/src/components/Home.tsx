import { useState } from "react";
import { users } from "../data";
import { AddUser } from "./AddUser";

export const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <button className="bg-blue-500 text-white font-semibold cursor-pointer mb-4 py-1 px-3 rounded w-fit" onClick={() => setShowForm(true)}>
        Add +
      </button>
      <table className="table-auto w-full border border-collapse border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">Email</th>
            <th className="border border-gray-300 p-2 text-left">Age</th>
            <th className="border border-gray-300 p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={`row-${index}`} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.age}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => console.log(`Delete user ${user.name}`)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => console.log(`Update user ${user.name}`)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && <AddUser setShowForm={setShowForm}/>}
    </div>
  );
};
