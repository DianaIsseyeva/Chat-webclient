import { useState } from 'react';
import client from '../constants/apollo-client';
import { API_URL } from '../constants/urls';

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<boolean>();

  const login = async (request: LoginRequest) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      setError(true);
      return;
    }
    setError(false);
    await client.refetchQueries({ include: 'active' });
  };
  return { login, error };
};

export { useLogin };
