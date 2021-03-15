import { useHistory } from "react-router-dom";
import { loginAction, logoutAction } from '../actions/auth-actions';

export function useUserAuth() {
  const { push } = useHistory();

  const login = async (dispatch) => {
    try {
      const token = 'Hi, Marcus :)';

      await localStorage.setItem('token', token);

      dispatch(loginAction({ token }));

      push('/home');
    }
    catch (e) {
      console.log(e);
    }
  };

  const logout = async (dispatch) => {
    try {
      await localStorage.removeItem('token');

      dispatch(logoutAction());
      
      push('/');
    } 
    catch (e) {
      console.log(e);
    }
  };
 
  return { login, logout };
}