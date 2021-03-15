import React, { useContext } from 'react';
import { Context } from '../App';
import { useUserAuth } from '../hooks/auth-hook';

export function Login() {
  const { state, dispatch } = useContext(Context);
  const { login } = useUserAuth();

  return (
    <div>
      <div>Current token: {state.token}</div>
      <button onClick={() => login(dispatch)}>LOGIN</button>
    </div>
  );
}
