import {similarPhotoDescription} from './data.js';
import { openPhoto,picturesContainer } from './fullPhoto.js';
import { isEnterKey } from './util.js';

const template=document.querySelector('#picture')
  .content
  .querySelector('.picture');
const miniPhotos = similarPhotoDescription();
const similarPhotosFragment = document.createDocumentFragment();

miniPhotos.forEach((photo) => {
  const imgTemplate = template.cloneNode(true);
  imgTemplate.querySelector('.picture__img').setAttribute('src', photo.url);
  imgTemplate.querySelector('.picture__comments').textContent = photo.comments;
  imgTemplate.querySelector('.picture__likes').textContent = photo.like;
  similarPhotosFragment.append(imgTemplate);

  picturesContainer.addEventListener('click', ()=>
    openPhoto(photo)
  );

  picturesContainer.addEventListener('keydown', () => {
    if (isEnterKey()){
      openPhoto(photo);
    }
  });

});
picturesContainer.append(similarPhotosFragment);
