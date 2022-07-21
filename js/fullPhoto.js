import { isEscapeKey, isEnterKey } from './util.js';

const body = document.querySelector('body');
const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const socialCommentsLoader = document.querySelector('.social__comments-loader');
const previewPhoto = bigPicture.querySelector('.big-picture__img');
const previewPhotoSee= previewPhoto.querySelector('img');
const photoLike = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentCount = socialCommentCount.querySelector('.comments-count');
const socialComment = bigPicture.querySelector('.social__comments');
const closePreviewPhoto = bigPicture.querySelector('#picture-cancel');
const socialCaption = bigPicture.querySelector('.social__caption');


const generatePhotoList = ({url, like, comments, descriptions, avatar, name}) => {

  previewPhotoSee.setAttribute('src', url);
  photoLike.textContent = like;
  socialCaption.textContent = descriptions;
  commentCount.textContent = comments.length;
  if(comments, avatar, name) {
    const commentTemplate = document.querySelector('#comment').content.cloneNode(true);
    const commentText = commentTemplate.querySelector('.social__text');
    commentText.textContent = comments;
    const commenator = commentTemplate.querySelector('img');
    commenator.setAttribute('src', avatar);
    commenator.setAttribute('alt', name);
    socialComment.append(commentTemplate);
  }
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
  socialComment.innerHTML = '';

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

export { openPhoto,closePhoto, picturesContainer };
