<<<<<<< Updated upstream
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
=======
<<<<<<< HEAD
import './photo.js';
import { similarPhotoDescription } from './data.js';
console.log (similarPhotoDescription);
=======

>>>>>>> 1ff61dc2c3c9011aad2ab3ea80b70f7b59989f97
>>>>>>> Stashed changes
