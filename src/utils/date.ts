const timestampToDateString = (timestamp: number): string => {
  const [, month, date, year] = new Date(timestamp).toDateString().split(' ');
  return `${month} ${date}, ${year}`;
};

export default timestampToDateString;
