import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

export default function Users() {
  const users = useLoaderData();
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((req) => req.json())
      .then((res) => {
        console.log(res);
        if (res.deletedCount > 0) {
          alert("Successfully delete...");
        }
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
            <Link to={`/update/${user._id}`}><button>Update</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
