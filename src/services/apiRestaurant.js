const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getRestaurantData() {
  const res = await fetch("https://react-fast-pizza-api.onrender.com/api");
  const data = res.json();
  console.log(data);
}
