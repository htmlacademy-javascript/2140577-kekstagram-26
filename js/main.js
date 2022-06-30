function getRandomIntInclusive(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function checkCommentLength (commentLength, maxLength) {
  if (commentLength > maxLength) {
    console.log ('Длина комментария не может составлять больше 140 символов ');
  } else  {
    console.log ('ok');
  }
}
function getRandomArrayElement (arr) {
  return arr[getRandomIntInclusive (0, arr.length+1)]
}

function getIdList (number) {
  return Array (number)
  .fill (0)
  .map((_, idx) => idx + 1);
}
const id = getIdList(25);
const url = Array.from({length:25}, (value, index) => `photos/${getRandomIntInclusive(1, 25)}.jpg`);
const DESCRIPTIONS = [
'На отдыхе',
'В целом всё норм',
'Палец в кадре это интетесный подход',
'Хорошо, что лето',
'Речные прогулки'
];
const likes = getIdList (200);
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const avatar= Array.from ({length:6}, (value, index) => `img/avatar-${getRandomIntInclusive(1, 6)}.svg`);
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
const getPhotoDescription =()=>
  ({
    id: getRandomArrayElement(id),
    avatar:getRandomArrayElement (avatar),
    message: getRandomArrayElement (MESSAGE),
    name: getRandomArrayElement (NAMES)
  });


const similarPhotoDescription = Array.from({length: 25}, getPhotoDescription);
console.log (similarPhotoDescription);
