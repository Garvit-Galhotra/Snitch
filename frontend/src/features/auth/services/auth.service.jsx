import axios from "axios";

const authApiInstance = axios.create({
  baseURL: "/api/auth",
  withCredentials: true,
});

export const register = async ({
  username,
  email,
  password,
  contact,
  isSeller,
}) => {
  const response = await authApiInstance.post("/register", {
    username,
    email,
    password,
    contact,
    isSeller,
  });
  return response.data;
};

export const login = async ({ email, password }) => {
  const response = await authApiInstance.post("/login", { email, password });
  return response.data;
};

export const getMe = async () => {
  const response = await authApiInstance.get("/get-me");
  return response.data;
};
