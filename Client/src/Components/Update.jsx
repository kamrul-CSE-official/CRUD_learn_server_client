import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

export default function Update() {
  const data = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateData = { name, email };

    fetch(`http://localhost:5000/user/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((req) => req.json())
      .then((res) => {
        console.log(res);
        if (res.modifiedCount > 0) {
          alert("Successfully Updated...");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <div>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            defaultValue={data.name}
            placeholder="Name"
          />
          <br />
          <input
            type="email"
            name="email"
            defaultValue={data.email}
            placeholder="Email"
          />
          <br />
          <input type="submit" title="Submit" />
        </form>
      </div>
    </div>
  );
}
