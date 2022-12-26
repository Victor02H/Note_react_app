export default function LoginForm() {
  return (
    <form>
      <div className="d-flex flex-wrap gap-3">
        <input
          type="text"
          className="col-12 p-2 border"
          placeholder="User Name"
          name="user_name"
        />

        <input
          type="password"
          className="col-12 p-2 border"
          placeholder="Password"
          name="user_password"
        />
      </div>

      <button className="col-12 bg-success text-white border-0 px-2 py-1 mt-4 rounded">Login</button>
    </form>
  );
}
