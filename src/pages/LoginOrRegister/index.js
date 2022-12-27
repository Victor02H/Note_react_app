import { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Login() {
  const [isRegisterAccount, setIsRegisterAccount] = useState(false);
  
  return (
    <div className="col-12 d-flex align-items-center justify-content-center vh-100">
      <div className="col-6 bg-light d-flex justify-content-center p-3 rounded">
        <div className="col-8">
          <header className="col-7 bg-secondary px-2 py-2 mx-auto my-0 rounded mb-4">
            <span
              className={`px-4 py-2 rounded text-success ${!isRegisterAccount && "bg-light"}`}
              onClick={() => setIsRegisterAccount(false)}>
              Login
            </span>

            <span
              className={`px-4 py-2 rounded text-white ${isRegisterAccount && "bg-light"}`}
              onClick={() => setIsRegisterAccount(true)}>
              Register
            </span>
          </header>

          {!isRegisterAccount ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}
