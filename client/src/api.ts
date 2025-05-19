  const apiUrl = import.meta.env.VITE_API_URL;

  export const fetchData = async (endpoint: string) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${apiUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    
    if (response.status === 401 || response.status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
      return;
    }

    if (!response.ok) {
      throw new Error('API request error');
    }

    return response.json();
  };
