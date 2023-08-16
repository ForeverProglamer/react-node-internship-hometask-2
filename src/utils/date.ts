export const timestampToDateString = (timestamp: number): string => {
  const [, month, date, year] = new Date(timestamp).toDateString().split(' ');
  return `${month} ${date}, ${year}`;
};

export const parseDates = (content: string): string[] => {
  const pattern = /\b(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}\b/g; // dd/mm/yyyy
  const result = content.match(pattern);
  return result === null ? [] : result;
};
