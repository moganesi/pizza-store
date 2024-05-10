import { useEffect, useState } from "react";
import { logIn } from "../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [userName, setUserName] = useState("mishik");
  const [password, setPassword] = useState("chishik");
  //   const user = useSelector((state) => state.user.user);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  console.log(loggedIn);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (userName && password) dispatch(logIn(userName));
  }

  useEffect(
    function () {
      if (loggedIn) navigate("/menu", { replace: true });
    },
    [loggedIn, navigate]
  );

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>User name:</label>
        <input type="text" value="mishik"></input>
        <br />
        <label>Password:</label>
        <input type="text" value="chishik"></input>
        <br />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
}

export default Login;
