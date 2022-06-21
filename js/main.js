function getRandomIntInclusive(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
getRandomIntInclusive ();

// Source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит
function checkCommentLength (commentLength, maxLength) {
  if (commentLength > maxLength)
  {console.log ('Длина комментария не может составлять больше 140 символов ');}
  else {
    console.log ('ok');}
}
checkCommentLength ();
