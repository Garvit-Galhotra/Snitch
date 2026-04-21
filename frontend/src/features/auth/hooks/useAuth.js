import { useDispatch } from "react-redux";

import { setUser, setLoading, setError } from "../states/auth.slice";

import { register, login, getMe } from "../services/auth.service";

export const useAuth = () => {
  const dispatch = useDispatch();

  async function handleRegister({
    username,
    email,
    password,
    contact,
    isSeller = false,
  }) {
    try {
      dispatch(setLoading(true));

      const data = register({ username, email, password, contact, isSeller });

      dispatch(setUser(data.user));
      return data.user;
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function handleLogin({ email, password }) {
    try {
      dispatch(setLoading(true));
      const data = await login({ email, password });
      dispatch(setUser(data.user));
      return data.user;
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function handleGetMe() {
    try {
      dispatch(setLoading(true));

      const data = await getMe();
      dispatch(setUser(data.user));

      return data.user;
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  }

  return { handleRegister, handleLogin, handleGetMe };
};
