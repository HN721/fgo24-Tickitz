import Swal from "sweetalert2";

export function useRegister({ username, email, password, phone }) {
  const data = {
    username,
    email: encodeURIComponent(email),
    password: encodeURIComponent(password),
    phone,
  };
  let auth = [];
  auth.push(data);
  localStorage.setItem("Auth", JSON.stringify(auth));
  return Swal.fire({
    title: "Sucess!",
    icon: "success",
  });
}
