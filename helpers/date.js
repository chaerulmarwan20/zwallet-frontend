const setDate = (params) => {
  const date = new Date(params);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${
    month[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}.${date.getMinutes()}`;
};

export default setDate;
