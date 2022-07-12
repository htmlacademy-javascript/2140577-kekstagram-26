function getRandomIntInclusive(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
function getRandomArrayElement (arr) {
  return arr[getRandomIntInclusive (0, arr.length-1)];
}
function getIdList (number) {
  return Array (number)
    .fill (0)
    .map((_, idx) => idx + 1);
}
export {getRandomIntInclusive, getRandomArrayElement, getIdList};
