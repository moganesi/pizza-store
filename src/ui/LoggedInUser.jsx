import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/User/userSlice";
import { useNavigate } from "react-router-dom";

function LoggedInUser() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello {user}</h1>
      <button
        onClick={() => {
          dispatch(logOut());
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LoggedInUser;
