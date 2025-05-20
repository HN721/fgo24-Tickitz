import Swal from "sweetalert2";

export function useLogin({ email, password }) {
  const getItem = JSON.parse(localStorage.getItem("auth") || "[]");
  if (email !== getItem.email) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Wrong Email ",
    });
  } else if (password !== getItem.password) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Wrong Password ",
    });
  } else {
    return true;
  }
}
