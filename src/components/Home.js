import React, { useContext } from 'react';
import { Context } from '../App';
import { useUserAuth } from '../hooks/auth-hook';

export function Home() {
  const { state, dispatch } = useContext(Context);
  const { logout } = useUserAuth();

  return (
    <div>
      <div>Current token: {state.token}</div>
      <button onClick={() => logout(dispatch)}>LOGOUT</button>
    </div>
  );
}
