<<<<<<< HEAD
import {getRandomArrayElement} from './utill.js';
import {getIdList} from './utill.js';
import { getRandomIntInclusive } from './utill.js';

const id = getIdList(25);
const url = Array.from({length:25}, (value, index) => `photos/${getRandomIntInclusive(1, 25)}.jpg`);
const DESCRIPTIONS = [
  'На отдыхе',
  'В целом всё норм',
  'Палец в кадре это интетесный подход',
  'Хорошо, что лето',
  'Речные прогулки'
];
const COMMENTS = [
  'Просто замечательно',
  'надо убирать палец из кадра',
  'Все на фотке перекошено',
  'Я уронил фотоаппарат',
  'Wow',
  'Adorable',
  'Super'
];
=======

>>>>>>> 1ff61dc2c3c9011aad2ab3ea80b70f7b59989f97
const likes = getIdList (200);
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
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

<<<<<<< HEAD
const similarPhotoDescription = () => Array.from({length: 25}, getPhotoDescription);
=======
>>>>>>> 1ff61dc2c3c9011aad2ab3ea80b70f7b59989f97
export {similarPhotoDescription};
