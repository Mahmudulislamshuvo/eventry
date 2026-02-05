const formatArrayLength = (arr) => {
  if (!Array.isArray(arr)) return 0;

  const length = arr.length;

  if (length < 1000) return length;

  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });

  return formatter.format(length).toLowerCase();
};
export default formatArrayLength;
