import jwtDecode from "jwt-decode";

export default function (to, from, next) {
  const isAuthenticated = localStorage.getItem('token');
  const decodedToken = isAuthenticated ? jwtDecode(isAuthenticated) : null;

  if ((to.path !== '/loginpage' && to.path !== '/signuppage') && !isAuthenticated) {
    next('/loginpage');
  } else if ((to.path === '/loginpage' || to.path === '/signuppage') && isAuthenticated) {
    next('/');
  } else {
    if (decodedToken && decodedToken.payload.role === 'ADMIN') {
      next();
    } else if (to.path === '/edit' || to.path === '/admin' || to.path === '/create') {
      next('/');
    } else {
      next();
    }
  }
}
