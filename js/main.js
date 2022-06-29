function getRandomIntInclusive(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
getRandomIntInclusive ();

function checkCommentLength (commentLength, maxLength) {
  if (commentLength > maxLength)
  {console.log ('Длина комментария не может составлять больше 140 символов ');}
  else {
    console.log ('ok');}
}
checkCommentLength ();

 function getIdList (number) {
  return Array (number)
  .fill (0)
  .map((_, idx) => idx + 1);
}
const ID = getIdList(25);
const URL = Array.from({length:25}, (value, index) => `photos/${getRandomIntInclusive(1, 25)}.jpg`);
const DESCRIPTIONS = [
'На отдыхе',
'В целом всё норм',
'Палец в кадре это интетесный подход',
'Хорошо, что лето',
'Речные прогулки'
];
const LIKES = getIdList (200);
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const AVATAR = Array.from ({length:6}, (value, index) => `img/avatar-${getRandomIntInclusive(1, 6)}.svg`);
const NAMES = [
  'Иван',
  'Анна',
  'Рома',
  'Аркадий',
  'Петя',
  'Ира',
  'Василий',
  'Антон',
  'Мэри'
];
const getPhotoDescription =()=> {
 return {
   id: ID[getRandomIntInclusive (0, ID.length+1)],
   avatar: AVATAR[getRandomIntInclusive(0, AVATAR.length+1)],
   message: MESSAGE[getRandomIntInclusive(0, MESSAGE.length+1)],
   name: NAMES[getRandomIntInclusive(0, NAMES.length+1)]
 };
};

console.log (
  getPhotoDescription()
);
const similarPhotoDescription = Array.from({length: 25}, getPhotoDescription);
console.log (similarPhotoDescription);
