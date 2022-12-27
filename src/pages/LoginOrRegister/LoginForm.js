import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useCookies } from 'react-cookie';

export default function LoginForm() {
  const [cookies, setCookie] = useCookies();

  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    await axios.get("http://localhost:3001/users")
      .then(({ data }) => {
        data.forEach(user => {
          if ((user.email === userEmail) && (user.password === userPassword)) {
            toast.success(`Bem Vindo(a) ${user.name}`);
            
            addUserCookies(user.name, user.id);
            return navigate("/");
          }
        })
      })
      .catch((err) => console.log(err));
  }

  function addUserCookies(userName, userID) {
    setCookie('user_id', userID, { path: '/' });
    setCookie('user_name', userName, { path: '/' });
  }

  return (
    <form onSubmit={login}>
      <div className="d-flex flex-wrap gap-3">
        <input
          type="text"
          className="col-12 p-2 border"
          placeholder="User Name"
          name="user_name"
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <input
          type="password"
          className="col-12 p-2 border"
          placeholder="Password"
          name="user_password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>

      <button className="col-12 bg-success text-white border-0 px-2 py-1 mt-4 rounded">Login</button>
    </form>
  );
}
