function periodIsLate(last, today, cycleLength) {
  const msInDay = 1000 * 60 * 60 * 24;
  const diffInMs = today - last;
  const diffInDays = diffInMs / msInDay;
  return diffInDays > cycleLength;
}
​