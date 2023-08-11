const capitalizeWord = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1);
};

// TODO add tests for camelCaseKeyToTableHeader
const camelCaseKeyToTableHeader = (camelCaseKey: string): string => {
  const result = camelCaseKey.match(/([a-z]+|[A-Z]{1}[a-z]+)/g);
  if (!result) return camelCaseKey;
  const [x, ...xs] = result;
  return [capitalizeWord(x), ...xs].join(' ');
};

export default camelCaseKeyToTableHeader;
