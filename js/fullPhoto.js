import { isEscapeKey, isEnterKey } from './util.js';

const body = document.querySelector('body');
const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const socialCommentsLoader = document.querySelector('.social__comments-loader');
const previewPhoto = bigPicture.querySelector('.big-picture__img');
const previewPhotoSee= previewPhoto.querySelector('img');
const photoLike = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialComment = bigPicture.querySelectorAll('.social__comments');
const closePreviewPhoto = bigPicture.querySelector('#picture-cancel');

const generatePhotoList = ({url,like,comments}) => {
  const similarPhotosFragment = document.createDocumentFragment();

  previewPhotoSee.setAttribute('src', url);
  photoLike.textContent=like;
  socialComment.textContent=comments;
  similarPhotosFragment.append(previewPhotoSee,photoLike,socialComment);

  picturesContainer.append(similarPhotosFragment);
};

const clearPhotoList = ()=>{
  bigPicture.innerHTML='';
};

const onEscKeydown =  (evt) =>{
  if(isEscapeKey(evt)){
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const openPhoto = (photo)=> {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  generatePhotoList(photo);

  document.addEventListener('keydown', onEscKeydown);
};

function closePhoto () {
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');
  body.classList.remove('modal-open');
  clearPhotoList();

  document.removeEventListener('keydown', onEscKeydown);
}

closePreviewPhoto.addEventListener('click',() =>{
  closePhoto();
});

closePreviewPhoto.addEventListener('keydown', (evt)=>{
  if(isEnterKey(evt)){
    closePhoto();
  }
});

export { openPhoto, picturesContainer };
