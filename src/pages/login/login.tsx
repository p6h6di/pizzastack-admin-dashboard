const Login = () => {
  return (
    <>
      <h1>Sign in</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
      <a href="#">Forgot password?</a>
      <button>Log in</button>
    </>
  );
};

export default Login;
