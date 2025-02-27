import jwtDecode from 'jwt-decode';

export const getId = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode(token);
    return decoded.userId;
  }
  return -1;
};
