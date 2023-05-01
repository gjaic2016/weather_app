export function formatToLocalDate(dateStr, locale){
  let date = new Date(dateStr);
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
};

export function getDayName(dateStr, locale) {
  let date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
};