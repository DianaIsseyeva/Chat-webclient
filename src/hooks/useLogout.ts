import { API_URL } from '../constants/urls';

const useLogout = () => {
  const logout = async () => {
    const res = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
    });
    if (!res.json.length) {
      throw new Error('Error loging out');
    }
  };

  return { logout };
};

export { useLogout };
