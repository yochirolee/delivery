import { useContext } from 'react';
import { AuthContext } from '../context/auth';

export const withUser = (Component) => (props) => {
  const { user, userLoaded, updateUser } = useContext(AuthContext);
  return <Component {...props} user={user} userLoaded={userLoaded} updateUser={updateUser} />;
};
