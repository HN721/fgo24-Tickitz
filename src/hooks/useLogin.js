import Swal from "sweetalert2";

export function useLogin({ email, password }) {
  const users = JSON.parse(localStorage.getItem("Auth") || "[]");

  const foundUser = users.find((user) => user.email === email);

  if (!foundUser) {
    return Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Wrong Email",
    });
  }

  if (foundUser.password !== password) {
    return Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Wrong Password",
    });
  }

  return Swal.fire({
    title: "Login Berhasil!",
    icon: "success",
  });
}
