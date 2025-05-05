const apiUrl = import.meta.env.VITE_API_URL;

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${apiUrl}${endpoint}`);
  if (!response.ok) {
    throw new Error('API request error');
  }
  return response.json();
};
