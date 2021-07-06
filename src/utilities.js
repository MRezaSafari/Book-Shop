export function convertToSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function dateToYMD(date) {
  var strArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var d = date.getDate();
  var m = strArray[date.getMonth()];
  var y = date.getFullYear();
  return " " + m + " " + (d <= 9 ? "0" + d : d) + " " + y;
}
