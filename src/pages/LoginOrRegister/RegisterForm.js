import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  async function registerUser(e) {
    e.preventDefault();

    await axios.post("http://localhost:3001/register-user", {
      name: userName,
      email: userEmail,
      password: userPassword,
    }).then(({ data }) => {
      toast.success("Conta criada com sucesso :)");
    }).catch(err => console.log(err));
  }

  return (
    <form onSubmit={registerUser}>
      <div className="d-flex flex-wrap gap-3">
        <input
          type="text"
          className="col-12 p-2 border"
          placeholder="Name"
          name="name"
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="email"
          className="col-12 p-2 border"
          placeholder="Email"
          name="email"
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <input
          type="password"
          className="col-12 p-2 border"
          placeholder="Password"
          name="password"
          onChange={(e) => setUserPassword(e.target.value)}
        />

        <input
          type="password"
          className="col-12 p-2 border"
          placeholder="Confirm Password"
          name="confirm_password"
        />
      </div>

      <button type="submit" className="col-12 bg-success text-white border-0 px-2 py-1 mt-4 rounded">Register</button>
    </form>
  );
}
