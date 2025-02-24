export function maxPages(count: number, limit: number) {
  if (limit === 0) {
    return 0;
  }
  if (count <= limit) {
    return 1;
  }
  const division = count / limit;
  const aproximado = roundMaxNumber(division);
  return aproximado;
}

export function roundMaxNumber(numberToRound: number) {
  let result = numberToRound;
  if (numberToRound % 1 !== 0) {
    const partFull = Math.floor(numberToRound);
    const partDecimal = numberToRound - partFull;

    if (partDecimal > 0) {
      result = partFull + 1;
    } else {
      result = partFull;
    }
  }
  return result;
}
