import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';
import { login } from '../api/auth';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      dispatch(loginSuccess({ user: data.user, token: data.token }));
      window.location.href = '/dashboard'; // redirect to dashboard after login
    },
    onError: (error) => {
      console.error('Login failed', error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
