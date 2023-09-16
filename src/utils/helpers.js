export function ingredients(arr) {
  return arr.join(", ");
}

export function formatTotal(num) {
  return `$${num.toFixed(2)}`;
}

export function determineTimeOfDay(hour) {
  if (hour >= 0 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  } else if (hour >= 17 && hour <= 23) {
    return "Good evening";
  } else {
    return "Invalid hour";
  }
}
