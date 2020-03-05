const signOut = () => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user_id');
  window.localStorage.removeItem('user_city');
};

export default signOut;