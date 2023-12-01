import Navbar from "./Navbar";

export default function CreateUser() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        console.log("Name: ", name, " Email: ", email);
        const user = {name, email};
        fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(req => req.json())
        .then(res => {console.log(res);
          if(res.insertedId){
            alert("Data added succussfully");
            from.reset();
          }
        })
        .catch(error => console.log(error));
      };
      return (
        <div style={{textAlign: "center"}}>
            <Navbar />
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <br />
            <input type="email" name="email" placeholder="Email" />
            <input type="submit" title="Submit" />
          </form>
        </div>
      );
    }