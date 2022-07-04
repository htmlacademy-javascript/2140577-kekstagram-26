function getRandomIntInclusive(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
export {getRandomIntInclusive}
function getRandomArrayElement (arr) {
  return arr[getRandomIntInclusive (0, arr.length+1)]
}
export {getRandomArrayElement};
function checkCommentLength (commentLength, maxLength) {
  if (commentLength > maxLength) {
    console.log ('Длина комментария не может составлять больше 140 символов ');
  } else  {
    console.log ('ok');
  }
}
function getIdList (number) {
  return Array (number)
  .fill (0)
  .map((_, idx) => idx + 1);
}
export {getIdList};
