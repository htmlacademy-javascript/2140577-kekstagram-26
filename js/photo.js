import {similarPhotoDescription} from './data.js';
import { openPhoto,closePhoto,closePreviewPhoto } from './fullPhoto.js';
import { isEnterKey } from './util.js';
const template=document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniPhotos = similarPhotoDescription();
const similarPhotosFragment = document.createDocumentFragment();
miniPhotos.forEach(({url, comments, like}) =>{
  const imgTemplate = template.cloneNode(true);
  imgTemplate.querySelector('.picture__img').setAttribute('src', url);
  imgTemplate.querySelector('.picture__comments').textContent = comments;
  imgTemplate.querySelector('.picture__likes').textContent = like;
  similarPhotosFragment.append(imgTemplate);
});
template.after(similarPhotosFragment);

template.addEventListener('click', ()=> {
  openPhoto();
});
template.addEventListener('keydown', (evt) => {
  if(isEnterKey(evt)){
    openPhoto();
  }
});

closePreviewPhoto.addEventListener('click',() =>{
  closePhoto();
});
closePreviewPhoto.addEventListener('keydown', (evt)=>{
  if(isEnterKey(evt)){
    closePhoto();
  }
});
