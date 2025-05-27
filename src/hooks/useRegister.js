import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { AddUserAction } from "../redux/reducers/register";

export function useRegister() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);

  return ({ username, email, password, phone }) => {
    dispatch(AddUserAction({ username, email, password, phone }));

    const isUsed = users.find((user) => user.email === email);
    if (isUsed) {
      Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: "Email already used",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Register Success",
      });
    }
  };
}
