export function ingredients(arr) {
  return arr.join(", ");
}

export function formatTotal(num) {
  return `$${num.toFixed(2)}`;
}
