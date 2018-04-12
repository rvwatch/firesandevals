export const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/houses');
    const houses = await response.json();
    return houses;
  } catch (errs) {
    throw new Error(errs.message);
  }
};
