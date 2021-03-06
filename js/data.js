
import {getRandomArrayElement} from './util.js';
import {getIdList} from './util.js';
import { getRandomIntInclusive } from './util.js';

const id = getIdList(25);
const url = Array.from({length:25}, () => `photos/${getRandomIntInclusive(1, 25)}.jpg`);
const avatar = Array.from({length:6}, () => `img/avatar-${getRandomIntInclusive(1, 6)}.svg`);

const COMMENTS = [
  'Просто замечательно',
  'надо убирать палец из кадра',
  'Все на фотке перекошено',
  'Я уронил фотоаппарат',
  'Wow',
  'Adorable',
  'Super'
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
const DESCRIPTIONS = [
  'В целом всё ок',
  'надо убирать палец из кадра',
  'это просто непрофессионально',
  'на банановой кожуре',
  'их избивают?'
];
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

const getPhotoDescription = () => ({
  id: getRandomArrayElement(id),
  avatar: getRandomArrayElement(avatar),
  message:getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
  url: getRandomArrayElement(url),
  comments: getRandomArrayElement(COMMENTS),
  like: getRandomArrayElement(likes),
  descriptions: getRandomArrayElement(DESCRIPTIONS)
});
const similarPhotoDescription = () => Array.from({length: 25}, getPhotoDescription);
export {similarPhotoDescription};
