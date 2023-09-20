export function ingredientsJoin(arr) {
  return arr.join(", ");
}

export function formatTotal(num) {
  return `$${num.toFixed(2)}`;
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
