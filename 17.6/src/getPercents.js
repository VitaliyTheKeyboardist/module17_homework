export function getPercents(percent, number) {
  if (typeof percent !== "number" || typeof number !== "number") {
    return "Данные неверны"
  } else {
    return (number / 100) * percent
  }
}
