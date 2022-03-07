export default function formatDate(date) {
  const formated = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })

  return formated
}