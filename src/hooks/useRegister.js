import Swal from "sweetalert2";

export function useRegister({ username, email, password, phone }) {
  const getItem = JSON.parse(localStorage.getItem("Auth") || "[]");

  const isEmailUsed = getItem.find((item) => item.email === email);

  if (isEmailUsed) {
    return Swal.fire({
      icon: "error",
      title: "Register Failed",
      text: "Email already used",
    });
  }

  const data = {
    id: Math.floor(Math.random() * 100),
    username,
    email,
    password,
    phone,
  };

  getItem.push(data);
  localStorage.setItem("Auth", JSON.stringify(getItem));

  return Swal.fire({
    title: "Success!",
    icon: "success",
  });
}
