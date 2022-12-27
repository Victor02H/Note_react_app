import { Link } from "react-router-dom";

import { ImExit } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";

import { useCookies } from 'react-cookie';

export default function Header() {
  const [cookies] = useCookies();

  return (
    <header className="col-12 p-4 row justify-content-end">
      <span className="col-auto d-flex align-items-center gap-2 text-secondary">
        <FaUserAlt /> {cookies.user_name !== "" ? cookies.user_name : "Olá Visitante"}
      </span>

      <Link to="Login" className="col-auto text-decoration-none d-flex align-items-center gap-2 text-secondary">
        Sair <ImExit />
      </Link>
    </header>
  );
}
