const apiUrl = process.env.REACT_APP_API_URL;

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${apiUrl}${endpoint}`);
  if (!response.ok) {
    throw new Error('Errore nella richiesta API');
  }
  return response.json();
};