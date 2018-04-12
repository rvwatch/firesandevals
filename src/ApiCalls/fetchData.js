export const fetchData = async () => {
  const response = await fetch('http://localhost:3001/api/v1/houses'); 
  const houses = await response.json();
  return houses
}