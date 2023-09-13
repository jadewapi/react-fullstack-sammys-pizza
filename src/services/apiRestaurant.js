const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getRestaurantData() {
  const res = await fetch(`${API_URL}/menu`);
  const { data } = await res.json();
  return data;
}