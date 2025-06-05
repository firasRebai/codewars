function twoHighest(arr) {
  const uniqueValues = [...new Set(arr)];
  uniqueValues.sort((a, b) => b - a);
  return uniqueValues.slice(0, 2);
}
​