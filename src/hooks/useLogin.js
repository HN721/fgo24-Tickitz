import Swal from "sweetalert2";
function generateFakeToken() {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
}
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
  const tokenData = {
    token: generateFakeToken(),
    user: {
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email,
      phone: foundUser.phone,
    },
    createdAt: new Date().toISOString(),
    expiredAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
  };

  localStorage.setItem("token", JSON.stringify(tokenData));

  return true;
}
