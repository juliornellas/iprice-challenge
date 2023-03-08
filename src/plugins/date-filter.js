const months = [
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

export const dateFilter = (value) => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear().toString().slice(-2);
  const month = date.getMonth();
  const day = date.getDate() + 1;
  const formattedDate = `${day}-${months[month]}-${year}`;
  return formattedDate;
}
