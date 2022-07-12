import { similarPhotoDescription } from './data';

const template = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniPhotos = similarPhotoDescription();
const similarPhotosFragment = document.createDocumentFragment();
miniPhotos.forEach((url, comments,like) => {
  const imgTemplate = template.cloneNode(true);
  imgTemplate.querySelector('.picture__img').textContent = url;
  imgTemplate.querySelector('.picture__comments').textContent = comments;
  imgTemplate.querySelector('.picture__likes').textContent = like;
  similarPhotosFragment.append(imgTemplate);
});
template.append(similarPhotosFragment);
