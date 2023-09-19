const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getRestaurantData() {
  const res = await fetch(`${API_URL}/menu`);
  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorDetail = await res.text(); // Get additional error details
      throw Error(
        `Failed to create order. Status: ${res.status}, Detail: ${errorDetail}`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
